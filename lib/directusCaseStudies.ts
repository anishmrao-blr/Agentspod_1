import type { InternalPageData, InternalPageSection } from "@/components/landing/internalPages";

type DirectusListResponse<T> = { data?: T[] };

type DirectusCaseStudyRecord = {
  title: string;
  category: string;
  summary: string;
  detail_page?: string | null;
  overview?: string | null;
  technology_stack?: string | null;
  key_challenges?: string | null;
  solutions?: string | null;
  benefits_delivered?: string | null;
  conclusion_highlights?: string | null;
};

const DIRECTUS_BASE_URL = process.env.DIRECTUS_URL ?? "http://127.0.0.1:8055";
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

function getDirectusRequestInit(): RequestInit {
  const headers: Record<string, string> = {};
  if (DIRECTUS_TOKEN) headers.Authorization = `Bearer ${DIRECTUS_TOKEN}`;
  return { headers, cache: "no-store" };
}

async function fetchCaseStudies(pageSlug: string): Promise<DirectusCaseStudyRecord[]> {
  const query = new URLSearchParams();
  query.append("filter[page_slug][_eq]", pageSlug);
  query.append("filter[status][_neq]", "archived");
  query.append("fields[]", "title");
  query.append("fields[]", "category");
  query.append("fields[]", "summary");
  query.append("fields[]", "detail_page");
  query.append("fields[]", "overview");
  query.append("fields[]", "technology_stack");
  query.append("fields[]", "key_challenges");
  query.append("fields[]", "solutions");
  query.append("fields[]", "benefits_delivered");
  query.append("fields[]", "conclusion_highlights");
  query.append("sort[]", "sort");
  query.append("sort[]", "title");
  query.append("limit", "-1");

  const response = await fetch(`${DIRECTUS_BASE_URL}/items/case_studies?${query.toString()}`, getDirectusRequestInit());
  if (!response.ok) return [];
  const json = (await response.json()) as DirectusListResponse<DirectusCaseStudyRecord>;
  return Array.isArray(json.data) ? json.data : [];
}

function normalizeBullets(text?: string | null): string | null {
  if (!text?.trim()) return null;
  return text
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("- ")) return `• ${trimmed.slice(2).trim()}`;
      return trimmed;
    })
    .join("\n")
    .trim();
}

function buildDetails(item: DirectusCaseStudyRecord): string | undefined {
  const sections: Array<{ heading: string; value?: string | null }> = [
    { heading: "Overview", value: item.overview },
    { heading: "Technology Stack", value: item.technology_stack },
    { heading: "Key Challenges", value: item.key_challenges },
    { heading: "Solutions", value: item.solutions },
    { heading: "Benefits Delivered", value: item.benefits_delivered },
    { heading: "Conclusion Highlights", value: item.conclusion_highlights }
  ];

  const lines: string[] = [];
  for (const section of sections) {
    const value = normalizeBullets(section.value);
    if (!value) continue;
    if (lines.length > 0) lines.push("");
    lines.push(section.heading);
    lines.push(value);
  }

  return lines.length ? lines.join("\n") : undefined;
}

export async function fetchCaseStudiesPageFromDirectus(
  basePage: InternalPageData,
  pageSlug = "projects"
): Promise<InternalPageData | null> {
  try {
    const records = await fetchCaseStudies(pageSlug);
    if (!records.length) return null;

    const groupsMap = new Map<string, InternalPageSection[]>();
    const capabilities: InternalPageSection[] = [];
    for (const item of records) {
      const details = buildDetails(item);
      const learnMoreHref = item.detail_page?.trim() || undefined;
      const capability: InternalPageSection = {
        title: item.title,
        body: item.summary,
        ...(details ? { details } : {}),
        ...(learnMoreHref ? { learnMoreHref } : {})
      };
      capabilities.push(capability);
      const category = item.category?.trim() || "Other";
      if (!groupsMap.has(category)) groupsMap.set(category, []);
      groupsMap.get(category)?.push(capability);
    }

    const capabilityGroups = Array.from(groupsMap.entries()).map(([title, items]) => ({ title, items }));
    const highlights = capabilityGroups.map((group) => group.title);

    return {
      ...basePage,
      highlights,
      capabilityGroups,
      capabilities
    };
  } catch {
    return null;
  }
}
