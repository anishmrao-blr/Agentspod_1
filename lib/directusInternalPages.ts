import type { InternalPageData, InternalPageSection, PageHighlight } from "@/components/landing/internalPages";

type DirectusItemResponse<T> = { data?: T };

type InternalPageRecord = {
  slug: string;
  title?: string;
  description?: string;
  hero_heading?: string;
  hero_body?: string;
  primary_cta_label?: string;
  primary_cta_href?: string;
  capabilities_section_title?: string | null;
  highlights?: unknown;
  capabilities?: unknown;
  capability_groups?: unknown;
  closing_heading?: string;
  closing_body?: string;
};

const DIRECTUS_BASE_URL = process.env.DIRECTUS_URL ?? "http://127.0.0.1:8055";
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

function getDirectusRequestInit(): RequestInit {
  const headers: Record<string, string> = {};
  if (DIRECTUS_TOKEN) headers.Authorization = `Bearer ${DIRECTUS_TOKEN}`;
  return { headers, cache: "no-store" };
}

function parseHighlights(value: unknown, fallback: PageHighlight[]): PageHighlight[] {
  if (!Array.isArray(value)) return fallback;
  return value.filter((item): item is PageHighlight => {
    if (typeof item === "string") return true;
    if (!item || typeof item !== "object") return false;
    const maybe = item as { label?: unknown; href?: unknown };
    return typeof maybe.label === "string" && typeof maybe.href === "string";
  });
}

function parseCapabilities(value: unknown, fallback: InternalPageSection[]): InternalPageSection[] {
  if (!Array.isArray(value)) return fallback;
  const parsed: InternalPageSection[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") continue;
    const maybe = item as { title?: unknown; body?: unknown; details?: unknown; learnMoreHref?: unknown };
    if (typeof maybe.title !== "string" || typeof maybe.body !== "string") continue;
    const details = typeof maybe.details === "string" ? maybe.details : undefined;
    const learnMoreHref = typeof maybe.learnMoreHref === "string" ? maybe.learnMoreHref : undefined;
    parsed.push({
      title: maybe.title,
      body: maybe.body,
      ...(details ? { details } : {}),
      ...(learnMoreHref ? { learnMoreHref } : {})
    });
  }
  return parsed.length ? parsed : fallback;
}

function parseCapabilityGroups(
  value: unknown,
  fallback: InternalPageData["capabilityGroups"]
): InternalPageData["capabilityGroups"] {
  if (!Array.isArray(value)) return fallback;
  const parsed = value
    .map((group) => {
      if (!group || typeof group !== "object") return null;
      const maybe = group as { title?: unknown; items?: unknown };
      if (typeof maybe.title !== "string") return null;
      return {
        title: maybe.title,
        items: parseCapabilities(maybe.items, [])
      };
    })
    .filter((group): group is { title: string; items: InternalPageSection[] } => Boolean(group));
  return parsed.length ? parsed : fallback;
}

export async function fetchInternalPageFromDirectus(
  slug: string,
  fallback: InternalPageData
): Promise<InternalPageData> {
  try {
    const query = new URLSearchParams();
    query.append("filter[slug][_eq]", slug);
    query.append("filter[status][_neq]", "archived");
    query.append("limit", "1");
    query.append("fields[]", "slug");
    query.append("fields[]", "title");
    query.append("fields[]", "description");
    query.append("fields[]", "hero_heading");
    query.append("fields[]", "hero_body");
    query.append("fields[]", "primary_cta_label");
    query.append("fields[]", "primary_cta_href");
    query.append("fields[]", "capabilities_section_title");
    query.append("fields[]", "highlights");
    query.append("fields[]", "capabilities");
    query.append("fields[]", "capability_groups");
    query.append("fields[]", "closing_heading");
    query.append("fields[]", "closing_body");

    const response = await fetch(`${DIRECTUS_BASE_URL}/items/internal_pages?${query.toString()}`, getDirectusRequestInit());
    if (!response.ok) return fallback;
    const json = (await response.json()) as DirectusItemResponse<InternalPageRecord> | { data?: InternalPageRecord[] };
    const item = Array.isArray((json as { data?: InternalPageRecord[] }).data)
      ? (json as { data?: InternalPageRecord[] }).data?.[0]
      : (json as DirectusItemResponse<InternalPageRecord>).data;
    if (!item) return fallback;

    return {
      ...fallback,
      slug: item.slug || fallback.slug,
      title: item.title || fallback.title,
      description: item.description || fallback.description,
      heroHeading: item.hero_heading || fallback.heroHeading,
      heroBody: item.hero_body || fallback.heroBody,
      primaryCtaLabel: item.primary_cta_label || fallback.primaryCtaLabel,
      primaryCtaHref: item.primary_cta_href || fallback.primaryCtaHref,
      capabilitiesSectionTitle: item.capabilities_section_title || fallback.capabilitiesSectionTitle,
      highlights: parseHighlights(item.highlights, fallback.highlights),
      capabilities: parseCapabilities(item.capabilities, fallback.capabilities),
      capabilityGroups: parseCapabilityGroups(item.capability_groups, fallback.capabilityGroups),
      closingHeading: item.closing_heading || fallback.closingHeading,
      closingBody: item.closing_body || fallback.closingBody
    };
  } catch {
    return fallback;
  }
}
