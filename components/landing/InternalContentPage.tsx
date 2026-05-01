import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useTheme } from "@/components/theme/useTheme";
import { ExpandableCardFeature } from "./ExpandableCardFeature";
import {
  ComponentBadgePillTagDefault,
  ComponentCardFeature,
  ComponentLogoAIAgentsPodCubeMark,
  ComponentNavMenuItemLink,
  ComponentTextBodyLarge,
  ComponentTextH2Section
} from "./PencilComponentLibrary";
import type { InternalPageData } from "./internalPages";

type InternalContentPageProps = {
  page: InternalPageData;
};

const ORIGIN = "";
const serviceLinks = [
  { label: "AI Agents", href: `${ORIGIN}/ai-agents` },
  { label: "Generative AI", href: `${ORIGIN}/gen-ai` },
  { label: "Data Science", href: `${ORIGIN}/data-science` },
  { label: "Voice AI", href: `${ORIGIN}/voice-ai` },
  { label: "Software Dev", href: `${ORIGIN}/software-development` }
];

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function InternalContentPage({ page }: InternalContentPageProps) {
  const { theme, toggleTheme } = useTheme();
  const isExternalCta = isExternalHref(page.primaryCtaHref);
  const hideHeroSection = page.slug === "projects";
  const hideCapabilities = page.slug === "privacy" || page.slug === "terms";
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

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
      </Head>
      <main className="pc-page">
        <header className="pc-header">
          <div className="pc-wrap pc-header-row">
            <a className="pc-brand" href="/">
              <ComponentLogoAIAgentsPodCubeMark className="pc-brand-logo-cube-mark" />
            </a>
            <nav className="pc-header-nav" aria-label="Primary">
              <div className="pc-nav-dropdown">
                <button type="button" className="pc-nav-item has-chevron pc-nav-dropdown-trigger" aria-expanded="false">
                  Services
                </button>
                <div className="pc-nav-dropdown-panel" role="menu">
                  {serviceLinks.map((item) => (
                    <a key={item.href} className="pc-nav-item" href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <ComponentNavMenuItemLink href={`${ORIGIN}/projects`}>Case Studies</ComponentNavMenuItemLink>
              <ComponentNavMenuItemLink href={`${ORIGIN}/careers`}>Careers</ComponentNavMenuItemLink>
              <ComponentNavMenuItemLink href={`${ORIGIN}/contact`}>Contact</ComponentNavMenuItemLink>
            </nav>
            <div className="pc-header-ctas">
              <button
                type="button"
                className="pc-btn pc-btn-ghost-header pc-theme-toggle"
                aria-label="Theme toggle"
                aria-pressed={theme === "light"}
                onClick={toggleTheme}
              >
                {theme === "light" ? "Light" : "Dark"}
              </button>
              <a
                className="pc-btn pc-btn-primary-header pc-btn-anchor"
                href="https://cal.com/swami-tpxjxh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a meet →
              </a>
            </div>
          </div>
        </header>

        {!hideHeroSection ? (
          <section className="pc-wrap pc-section pc-internal-hero">
            <ComponentTextH2Section>{page.heroHeading}</ComponentTextH2Section>
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

        {!hideCapabilities ? <section className="pc-wrap pc-section">
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
        </section> : null}

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
          </div>
        </section>
      </main>
    </>
  );
}

