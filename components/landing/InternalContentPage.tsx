import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExpandableCardFeature } from "./ExpandableCardFeature";
import {
  ComponentBadgePillTagDefault,
  ComponentCardFeature,
  ComponentTextBodyLarge,
  ComponentTextH2Section
} from "./PencilComponentLibrary";
import type { InternalPageData } from "./internalPages";
import { SiteHeader } from "./SiteHeader";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://agentspod.ai").replace(/\/+$/, "");

type InternalContentPageProps = {
  page: InternalPageData;
  /**
   * When true, render only page sections (no Head, no outer main, no header).
   * Parent must supply document chrome: Head, main, and `SiteHeader` if needed.
   */
  embedded?: boolean;
};

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function InternalContentPage({ page, embedded = false }: InternalContentPageProps) {
  const isExternalCta = isExternalHref(page.primaryCtaHref);
  const isExternalSecondaryCta = page.secondaryCtaHref ? isExternalHref(page.secondaryCtaHref) : false;
  const hideHeroSection = page.slug === "projects";
  const hideCapabilities = page.slug === "privacy" || page.slug === "terms";
  const canonicalUrl = `${SITE_URL}/${page.slug}`;
  const allFilterLabel = "All";
  const groupedSections = page.capabilityGroups ?? [];
  const sectionHeading = groupedSections.length ? page.capabilitiesSectionTitle : page.capabilitiesSectionTitle ?? "Technical Capabilities";
  const [activeFilter, setActiveFilter] = useState(allFilterLabel);
  const visibleGroups = useMemo(() => {
    if (!groupedSections.length || activeFilter === allFilterLabel) {
      return groupedSections;
    }
    return groupedSections.filter((group) => group.title === activeFilter);
  }, [activeFilter, groupedSections]);

  const body = (
    <>
      {!hideHeroSection ? (
        <section className="pc-wrap pc-section pc-internal-hero">
          <h1 className="pc-text-h2-section">{page.heroHeading}</h1>
          <ComponentTextBodyLarge className="pc-section-copy">{page.heroBody}</ComponentTextBodyLarge>
          <div className="pc-hero-ctas is-centered">
            {isExternalCta ? (
              <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={page.primaryCtaHref} target="_blank" rel="noopener noreferrer">
                {page.primaryCtaLabel}
              </a>
            ) : (
              <Link className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={page.primaryCtaHref}>
                {page.primaryCtaLabel}
              </Link>
            )}
            {page.secondaryCtaLabel && page.secondaryCtaHref ? (
              isExternalSecondaryCta ? (
                <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={page.secondaryCtaHref} target="_blank" rel="noopener noreferrer">
                  {page.secondaryCtaLabel}
                </a>
              ) : (
                <Link className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={page.secondaryCtaHref}>
                  {page.secondaryCtaLabel}
                </Link>
              )
            ) : null}
          </div>
          {!groupedSections.length ? (
            <div className="pc-chip-row pc-internal-chip-row">
              {page.highlights.map((item) =>
                typeof item === "string" ? (
                  <ComponentBadgePillTagDefault key={item}>{item}</ComponentBadgePillTagDefault>
                ) : (
                  <a
                    key={item.label}
                    className="pc-chip-link"
                    href={item.href}
                    {...(isExternalHref(item.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <ComponentBadgePillTagDefault>{item.label}</ComponentBadgePillTagDefault>
                  </a>
                )
              )}
            </div>
          ) : null}
        </section>
      ) : null}

      {!hideCapabilities ? (
        <section className="pc-wrap pc-section">
          {sectionHeading ? <ComponentTextH2Section>{sectionHeading}</ComponentTextH2Section> : null}
          {groupedSections.length ? (
            <>
              <div className="pc-impact-metrics" role="tablist" aria-label="Case study categories">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === allFilterLabel}
                  className={`pc-tab pc-tab-feature${activeFilter === allFilterLabel ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(allFilterLabel)}
                >
                  {allFilterLabel}
                </button>
                {groupedSections.map((group) => (
                  <button
                    key={group.title}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === group.title}
                    className={`pc-tab pc-tab-feature${activeFilter === group.title ? " is-active" : ""}`}
                    onClick={() => setActiveFilter(group.title)}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
              {visibleGroups.map((group) => (
                <div key={group.title} className="pc-group-block">
                  {activeFilter === allFilterLabel ? <ComponentTextBodyLarge className="pc-section-copy">{group.title}</ComponentTextBodyLarge> : null}
                  <div className="pc-card-grid is-toolkit">
                    {group.items.map((item) => {
                      const learnMoreHref = item.learnMoreHref ?? page.primaryCtaHref;
                      const learnExternal = isExternalHref(learnMoreHref);
                      return item.details ? (
                        <ExpandableCardFeature
                          key={`${group.title}-${item.title}`}
                          title={item.title}
                          body={item.body}
                          media={item.image}
                          details={item.details}
                          learnMoreLabel="Learn more"
                        />
                      ) : (
                        <ComponentCardFeature
                          key={`${group.title}-${item.title}`}
                          title={item.title}
                          body={item.body}
                          media={item.image}
                          learnMoreHref={learnMoreHref}
                          learnMoreLabel="Learn more"
                          learnMoreTarget={learnExternal ? "_blank" : undefined}
                          learnMoreRel={learnExternal ? "noopener noreferrer" : undefined}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="pc-card-grid is-toolkit">
              {page.capabilities.map((item) => {
                const learnMoreHref = item.learnMoreHref ?? page.primaryCtaHref;
                const learnExternal = isExternalHref(learnMoreHref);
                return item.details ? (
                  <ExpandableCardFeature key={item.title} title={item.title} body={item.body} media={item.image} details={item.details} learnMoreLabel="Learn more" />
                ) : (
                  <ComponentCardFeature
                    key={item.title}
                    title={item.title}
                    body={item.body}
                    media={item.image}
                    learnMoreHref={learnMoreHref}
                    learnMoreLabel="Learn more"
                    learnMoreTarget={learnExternal ? "_blank" : undefined}
                    learnMoreRel={learnExternal ? "noopener noreferrer" : undefined}
                  />
                );
              })}
            </div>
          )}
        </section>
      ) : null}

      {page.relatedLinks && page.relatedLinks.length > 0 ? (
        <section className="pc-wrap pc-related-links" aria-label="Related services">
          <p className="pc-eyebrow">Related</p>
          <div className="pc-related-links-row">
            {page.relatedLinks.map((link) => (
              <Link key={link.href} className="pc-related-link" href={link.href}>
                {link.label} →
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="pc-wrap pc-section pc-cta">
        <ComponentTextH2Section>{page.closingHeading}</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">{page.closingBody}</ComponentTextBodyLarge>
        <div className="pc-hero-ctas is-centered">
          {isExternalCta ? (
            <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={page.primaryCtaHref} target="_blank" rel="noopener noreferrer">
              {page.primaryCtaLabel}
            </a>
          ) : (
            <Link className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={page.primaryCtaHref}>
              {page.primaryCtaLabel}
            </Link>
          )}
          {page.secondaryCtaLabel && page.secondaryCtaHref ? (
            isExternalSecondaryCta ? (
              <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={page.secondaryCtaHref} target="_blank" rel="noopener noreferrer">
                {page.secondaryCtaLabel}
              </a>
            ) : (
              <Link className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={page.secondaryCtaHref}>
                {page.secondaryCtaLabel}
              </Link>
            )
          ) : null}
        </div>
      </section>
    </>
  );

  if (embedded) {
    return body;
  }

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <main className="pc-page">
        <SiteHeader mobileNavAriaLabel="Primary mobile navigation" />
        {body}
      </main>
    </>
  );
}
