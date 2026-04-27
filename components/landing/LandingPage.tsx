import {
  ComponentBadgePillTagDefault,
  ComponentCardFeature,
  ComponentFooterStatusPillDefault,
  ComponentNavMenuItemLink,
  ComponentTabsFeatureDefault,
  ComponentTextBodyLarge,
  ComponentTextBodySmall,
  ComponentTextH1Hero,
  ComponentTextH2Section
} from "./PencilComponentLibrary";
import Image from "next/image";
import { useTheme } from "@/components/theme/useTheme";

const ORIGIN = "https://www.sevensenseai.com";

const serviceLinks = [
  { label: "AI Agents", href: `${ORIGIN}/ai-agents` },
  { label: "Generative AI", href: `${ORIGIN}/gen-ai` },
  { label: "Data Science", href: `${ORIGIN}/data-science` },
  { label: "Voice AI", href: `${ORIGIN}/voice-ai` },
  { label: "Software Dev", href: `${ORIGIN}/software-development` }
];

const toolkitCards = [
  {
    title: "AI Agents",
    body: "Autonomous systems that execute complex workflows 24/7.",
    learnMoreHref: `${ORIGIN}/ai-agents`
  },
  {
    title: "Voice AI",
    body: "Human-parity voice interfaces for support and sales.",
    learnMoreHref: `${ORIGIN}/voice-ai`
  },
  {
    title: "Custom Dev",
    body: "Bespoke software architecture for unique business needs.",
    learnMoreHref: `${ORIGIN}/software-development`
  },
  {
    title: "Generative AI",
    body: "LLM integration for content, code, and creative generation.",
    learnMoreHref: `${ORIGIN}/gen-ai`
  },
  {
    title: "Data Science",
    body: "Predictive modeling and deep analytics to drive decisions.",
    learnMoreHref: `${ORIGIN}/data-science`
  },
  {
    title: "Automation",
    body: "End-to-end process streamlining with intelligent logic.",
    learnMoreHref: "#contact",
    learnMoreLabel: "Discuss automation"
  }
];

const impactStats = [
  { value: "10+", label: "Research Papers & Patents" },
  { value: "30+", label: "In-House Engineers" },
  { value: "75+", label: "Successful Projects" }
];

const intelligenceMetrics = ["+65% ROI INCREASE", "23% CAC REDUCTION", "5000+ HOURS SAVED"];

export function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="pc-page">
      <header className="pc-header">
        <div className="pc-wrap pc-header-row">
          <a className="pc-brand" href="#home">
            Agendspod.AI
          </a>
          <nav className="pc-header-nav" aria-label="Primary">
            <div className="pc-nav-dropdown">
              <button type="button" className="pc-nav-item has-chevron pc-nav-dropdown-trigger" aria-expanded="false">
                Services
              </button>
              <div className="pc-nav-dropdown-panel" role="menu">
                {serviceLinks.map((item) => (
                  <a key={item.href} className="pc-nav-item" href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <ComponentNavMenuItemLink href={`${ORIGIN}/projects`} target="_blank" rel="noopener noreferrer">
              Projects
            </ComponentNavMenuItemLink>
            <ComponentNavMenuItemLink href={`${ORIGIN}/careers`} target="_blank" rel="noopener noreferrer">
              Careers
            </ComponentNavMenuItemLink>
            <ComponentNavMenuItemLink href="#contact">Contact</ComponentNavMenuItemLink>
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
              href="https://cal.com/sevesenseai/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK A MEET →
            </a>
          </div>
        </div>
      </header>

      <section className="pc-wrap pc-hero" id="home">
        <div className="pc-hero-copy">
          <ComponentTextH1Hero>
            ENGINEERING
            <br />
            INTELLIGENCE.
          </ComponentTextH1Hero>
          <ComponentTextBodyLarge>
            The technical partner for ambitious founders and forward-thinking enterprises. We build the AI systems that power
            the future.
          </ComponentTextBodyLarge>
          <div className="pc-hero-ctas">
            <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href="#contact">
              START YOUR PROJECT
            </a>
            <a
              className="pc-btn pc-btn-ghost-hero pc-btn-anchor"
              href="https://cal.com/sevesenseai/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              BOOK A MEET
            </a>
          </div>
        </div>
        <div className="pc-hero-art" aria-hidden="true">
          <div className="pc-hero-art-surface">
            <Image
              src="https://sevensenseai.com/images/ai-robot-background.png"
              alt=""
              width={1200}
              height={900}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="pc-wrap pc-about-strip" id="about" aria-labelledby="about-heading">
        <h2 id="about-heading" className="visually-hidden">
          About
        </h2>
        <ComponentTextBodyLarge>
          Engineering Intelligence. We build the AI infrastructure for founders and enterprises.
        </ComponentTextBodyLarge>
      </section>

      <section className="pc-wrap pc-section" aria-labelledby="audiences-heading">
        <h2 id="audiences-heading" className="visually-hidden">
          For founders and enterprise
        </h2>
        <div className="pc-audience-grid">
          <div className="pc-audience-card">
            <p className="pc-eyebrow">FOR FOUNDERS</p>
            <ComponentTextH2Section className="pc-audience-h2">Build a Product</ComponentTextH2Section>
            <ComponentTextBodyLarge>
              We act as your technical co-founder. From MVP to scale, we turn your ambitious vision into a market-ready
              reality.
            </ComponentTextBodyLarge>
            <div className="pc-chip-row">
              <ComponentBadgePillTagDefault>CUSTOM_DEV</ComponentBadgePillTagDefault>
              <ComponentBadgePillTagDefault>MVP_TO_SCALE</ComponentBadgePillTagDefault>
              <ComponentBadgePillTagDefault>GEN_AI_APPS</ComponentBadgePillTagDefault>
            </div>
            <div className="pc-audience-ctas">
              <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={`${ORIGIN}/contact?type=founder`} target="_blank" rel="noopener noreferrer">
                Build a Product
              </a>
            </div>
          </div>
          <div className="pc-audience-card">
            <p className="pc-eyebrow">FOR ENTERPRISE</p>
            <ComponentTextH2Section className="pc-audience-h2">Deploy a Solution</ComponentTextH2Section>
            <ComponentTextBodyLarge>
              Automate operations and unlock new ROI. We integrate intelligent agents and voice systems directly into your
              workflows.
            </ComponentTextBodyLarge>
            <div className="pc-chip-row">
              <ComponentBadgePillTagDefault>VOICE_AI</ComponentBadgePillTagDefault>
              <ComponentBadgePillTagDefault>PROCESS_AUTO</ComponentBadgePillTagDefault>
              <ComponentBadgePillTagDefault>AGENTS</ComponentBadgePillTagDefault>
            </div>
            <div className="pc-audience-ctas">
              <a
                className="pc-btn pc-btn-primary-hero pc-btn-anchor"
                href={`${ORIGIN}/contact?type=enterprise`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy a Solution
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-wrap pc-section" id="toolkit" aria-labelledby="toolkit-heading">
        <ComponentTextH2Section id="toolkit-heading">THE TOOLKIT</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          Our engineering core covers the entire spectrum of modern AI development.
        </ComponentTextBodyLarge>
        <div className="pc-card-grid is-toolkit">
          {toolkitCards.map((card) => (
            <ComponentCardFeature
              key={card.title}
              title={card.title}
              body={card.body}
              learnMoreHref={card.learnMoreHref}
              learnMoreLabel={card.learnMoreLabel ?? "Learn more"}
              learnMoreTarget={card.learnMoreHref.startsWith("http") ? "_blank" : undefined}
              learnMoreRel={card.learnMoreHref.startsWith("http") ? "noopener noreferrer" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="pc-wrap pc-section" id="impact" aria-labelledby="impact-heading">
        <ComponentTextH2Section id="impact-heading">
          SYSTEMS THAT
          <br />
          DELIVER IMPACT.
        </ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          Forget the buzzwords. We build high-performance AI solutions designed to improve your bottom line. Measurable impact,
          not just hype.
        </ComponentTextBodyLarge>
        <div className="pc-stats-row">
          {impactStats.map((row) => (
            <div key={row.label}>
              <p className="pc-stat-num">{row.value}</p>
              <ComponentTextBodySmall>{row.label}</ComponentTextBodySmall>
            </div>
          ))}
        </div>
        <p className="pc-eyebrow" style={{ textAlign: "center", marginTop: 48 }}>
          Intelligence Metrics
        </p>
        <div className="pc-impact-metrics">
          {intelligenceMetrics.map((label, index) => (
            <ComponentTabsFeatureDefault key={label} active={index === 0}>
              {label}
            </ComponentTabsFeatureDefault>
          ))}
        </div>
      </section>

      <section className="pc-wrap pc-section pc-cta" id="start" aria-labelledby="cta-heading">
        <ComponentTextH2Section id="cta-heading">READY TO BUILD?</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          Whether you&apos;re a founder with a vision or an enterprise with a problem, we have the engineering team to solve
          it.
        </ComponentTextBodyLarge>
        <div className="pc-hero-ctas is-centered">
          <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={`${ORIGIN}/contact`} target="_blank" rel="noopener noreferrer">
            START YOUR PROJECT
          </a>
        </div>
      </section>

      <section className="pc-wrap pc-contact-block" id="contact" aria-labelledby="contact-heading">
        <ComponentTextH2Section id="contact-heading">Contact</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          Get in touch with our engineering team to discuss your AI project.
        </ComponentTextBodyLarge>
        <div className="pc-contact-links">
          <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href="https://cal.com/sevesenseai/30min" target="_blank" rel="noopener noreferrer">
            Book a strategy call
          </a>
          <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="mailto:hello@sevensenseai.com">
            Email us
          </a>
        </div>
      </section>

      <footer className="pc-footer" id="resources">
        <div className="pc-wrap pc-footer-grid is-sevensense">
          <div>
            <a className="pc-brand" href="#home">
              Agendspod.AI
            </a>
            <ComponentTextBodySmall>Engineering Intelligence.</ComponentTextBodySmall>
            <ComponentTextBodySmall>We build the AI infrastructure for founders and enterprises.</ComponentTextBodySmall>
            <div className="pc-footer-social">
              <a href="https://www.linkedin.com/company/sevensense-ai" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hello@sevensenseai.com">Email</a>
              <a href="https://cal.com/sevesenseai/30min" target="_blank" rel="noopener noreferrer">
                Book a Meeting
              </a>
            </div>
            <ComponentFooterStatusPillDefault>© 2026 Agendspod.AI. All rights reserved.</ComponentFooterStatusPillDefault>
          </div>
          <div className="pc-footer-col">
            <h5>Solutions</h5>
            <a className="pc-text-body-soft" href={`${ORIGIN}/ai-agents`} target="_blank" rel="noopener noreferrer">
              AI Agents
            </a>
            <a className="pc-text-body-soft" href={`${ORIGIN}/gen-ai`} target="_blank" rel="noopener noreferrer">
              Generative AI
            </a>
            <a className="pc-text-body-soft" href={`${ORIGIN}/data-science`} target="_blank" rel="noopener noreferrer">
              Data Science
            </a>
            <a className="pc-text-body-soft" href={`${ORIGIN}/voice-ai`} target="_blank" rel="noopener noreferrer">
              Voice AI
            </a>
          </div>
          <div className="pc-footer-col">
            <h5>Company</h5>
            <a className="pc-text-body-soft" href="#about">
              About
            </a>
            <a className="pc-text-body-soft" href={`${ORIGIN}/projects`} target="_blank" rel="noopener noreferrer">
              Projects
            </a>
            <a className="pc-text-body-soft" href={`${ORIGIN}/careers`} target="_blank" rel="noopener noreferrer">
              Careers
            </a>
            <a className="pc-text-body-soft" href="#contact">
              Contact
            </a>
          </div>
          <div className="pc-footer-col">
            <h5>Legal</h5>
            <a className="pc-text-body-soft" href={`${ORIGIN}/privacy`} target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
            <a className="pc-text-body-soft" href={`${ORIGIN}/terms`} target="_blank" rel="noopener noreferrer">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
