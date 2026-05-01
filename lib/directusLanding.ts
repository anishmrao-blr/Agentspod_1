/** Hero logo strip; map from Directus `landing_hero_ai_brands` (create collection when ready). */
export type HeroAiBrand = {
  name: string;
  logoSrc?: string | null;
  href?: string | null;
  alt?: string | null;
};

export type ServiceLink = { label: string; href: string };
export type ToolkitCard = { title: string; body: string; learnMoreHref: string; learnMoreLabel?: string; media?: string };
export type ImpactStat = { value: string; label: string };
export type AudienceCard = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  chips: string[];
};
export type FooterLink = { section: "solutions" | "company" | "legal"; label: string; href: string };

export type LandingContent = {
  serviceLinks?: ServiceLink[];
  toolkitCards?: ToolkitCard[];
  impactStats?: ImpactStat[];
  intelligenceMetrics?: string[];
  audienceCards?: AudienceCard[];
  footerLinks?: FooterLink[];
  heroTitle?: string;
  heroDescription?: string;
  aboutText?: string;
  toolkitHeading?: string;
  toolkitDescription?: string;
  impactHeading?: string;
  impactDescription?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  contactHeading?: string;
  contactDescription?: string;
  contactEmail?: string;
  meetingUrl?: string;
  footerTagline?: string;
  footerSubtitle?: string;
  copyrightText?: string;
  siteName?: string;
  heroVideoUrl?: string | null;
  heroImageUrl?: string | null;
  /** Ordered hero AI brand logos; empty or missing shows design placeholders until CMS is populated. */
  heroAiBrands?: HeroAiBrand[];
};

type DirectusListResponse<T> = { data?: T[] };
type DirectusItemResponse<T> = { data?: T };

type LandingPageRecord = {
  slug: string;
  site_name?: string;
  hero_title?: string;
  hero_description?: string;
  about_text?: string;
  toolkit_heading?: string;
  toolkit_description?: string;
  impact_heading?: string;
  impact_description?: string;
  cta_heading?: string;
  cta_description?: string;
  contact_heading?: string;
  contact_description?: string;
  contact_email?: string;
  meeting_url?: string;
  footer_tagline?: string;
  footer_subtitle?: string;
  copyright_text?: string;
  hero_video_file?: string | null;
  hero_image_file?: string | null;
};

/** Directus collection: `landing_hero_ai_brands` — fields: page_slug, sort, name, logo_file (uuid), href (optional). */
type LandingHeroAiBrandRecord = {
  name: string;
  logo_file?: string | null;
  href?: string | null;
};

const DIRECTUS_BASE_URL = process.env.DIRECTUS_URL ?? "http://127.0.0.1:8055";
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

function getDirectusRequestInit(): RequestInit {
  const headers: Record<string, string> = {};
  if (DIRECTUS_TOKEN) {
    headers.Authorization = `Bearer ${DIRECTUS_TOKEN}`;
  }

  return {
    headers,
    cache: "no-store"
  };
}

async function fetchDirectusList<T>(path: string): Promise<T[]> {
  const response = await fetch(`${DIRECTUS_BASE_URL}${path}`, getDirectusRequestInit());
  if (!response.ok) return [];
  const json = (await response.json()) as DirectusListResponse<T>;
  return Array.isArray(json.data) ? json.data : [];
}

async function fetchDirectusItem<T>(path: string): Promise<T | null> {
  const response = await fetch(`${DIRECTUS_BASE_URL}${path}`, getDirectusRequestInit());
  if (!response.ok) return null;
  const json = (await response.json()) as DirectusItemResponse<T> | DirectusListResponse<T>;
  if ("data" in json) {
    if (Array.isArray(json.data)) return json.data[0] ?? null;
    return json.data ?? null;
  }
  return null;
}

function getDirectusAssetUrl(fileId?: string | null): string | null {
  if (!fileId) return null;
  // Serve assets through our Next API so browser requests don't need Directus auth.
  return `/api/directus-asset/${fileId}`;
}

export async function fetchLandingContentFromDirectus(pageSlug = "home"): Promise<LandingContent | null> {
  try {
    const [page, serviceLinks, toolkitCards, impactStats, intelligenceMetrics, audienceCards, footerLinks, heroAiBrands] =
      await Promise.all([
      fetchDirectusItem<LandingPageRecord>(
        `/items/landing_pages?filter[slug][_eq]=${encodeURIComponent(pageSlug)}&limit=1`
      ),
      fetchDirectusList<{ label: string; href: string }>(
        `/items/landing_service_links?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`
      ),
      fetchDirectusList<{ title: string; body: string; learn_more_href: string; learn_more_label?: string }>(
        `/items/landing_toolkit_cards?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`
      ),
      fetchDirectusList<{ value: string; label: string }>(
        `/items/landing_impact_stats?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`
      ),
      fetchDirectusList<{ label: string }>(
        `/items/landing_intelligence_metrics?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`
      ),
      fetchDirectusList<{
        eyebrow: string;
        title: string;
        description: string;
        cta_label: string;
        cta_href: string;
        chip_1?: string;
        chip_2?: string;
        chip_3?: string;
      }>(`/items/landing_audience_cards?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`),
      fetchDirectusList<{ section: "solutions" | "company" | "legal"; label: string; href: string }>(
        `/items/landing_footer_links?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`
      ),
      fetchDirectusList<LandingHeroAiBrandRecord>(
        `/items/landing_hero_ai_brands?filter[page_slug][_eq]=${encodeURIComponent(pageSlug)}&sort=sort`
      )
    ]);

    if (!page) return null;

    return {
      siteName: page.site_name,
      heroTitle: page.hero_title,
      heroDescription: page.hero_description,
      aboutText: page.about_text,
      toolkitHeading: page.toolkit_heading,
      toolkitDescription: page.toolkit_description,
      impactHeading: page.impact_heading,
      impactDescription: page.impact_description,
      ctaHeading: page.cta_heading,
      ctaDescription: page.cta_description,
      contactHeading: page.contact_heading,
      contactDescription: page.contact_description,
      contactEmail: page.contact_email,
      meetingUrl: page.meeting_url,
      footerTagline: page.footer_tagline,
      footerSubtitle: page.footer_subtitle,
      copyrightText: page.copyright_text,
      heroVideoUrl: getDirectusAssetUrl(page.hero_video_file),
      heroImageUrl: getDirectusAssetUrl(page.hero_image_file),
      heroAiBrands: heroAiBrands.map((item) => ({
        name: item.name,
        logoSrc: getDirectusAssetUrl(item.logo_file),
        href: item.href?.trim() || null,
        alt: item.name
      })),
      serviceLinks: serviceLinks.map((item) => ({ label: item.label, href: item.href })),
      toolkitCards: toolkitCards.map((item) => ({
        title: item.title,
        body: item.body,
        learnMoreHref: item.learn_more_href,
        learnMoreLabel: item.learn_more_label
      })),
      impactStats: impactStats.map((item) => ({ value: item.value, label: item.label })),
      intelligenceMetrics: intelligenceMetrics.map((item) => item.label),
      audienceCards: audienceCards.map((item) => ({
        eyebrow: item.eyebrow,
        title: item.title,
        description: item.description,
        ctaLabel: item.cta_label,
        ctaHref: item.cta_href,
        chips: [item.chip_1, item.chip_2, item.chip_3].filter((value): value is string => Boolean(value))
      })),
      footerLinks: footerLinks.map((item) => ({ section: item.section, label: item.label, href: item.href }))
    };
  } catch {
    return null;
  }
}
