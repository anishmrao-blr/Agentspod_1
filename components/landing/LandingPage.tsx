import {
  ComponentBadgePillTagDefault,
  ComponentCardFeature,
  ComponentFooterStatusPillDefault,
  ComponentLogoAIAgentsPodCubeMark,
  ComponentLogoAIBrandsStripPencilInline,
  ComponentMediaHeroCube,
  ComponentNavMenuItemLink,
  ComponentTabsFeatureDefault,
  ComponentTextBodyLarge,
  ComponentTextBodySmall,
  ComponentTextH1Hero,
  ComponentTextH2Section
} from "./PencilComponentLibrary";
import { FeaturedWork } from "./FeaturedWork";
import { useTheme } from "../theme/useTheme";
import type { LandingContent, ToolkitCard } from "../../lib/directusLanding";
import { useEffect, useMemo, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ORIGIN = "";

const defaultServiceLinks = [
  { label: "Agentic AI", href: `${ORIGIN}/ai-agents` },
  { label: "Voice AI", href: `${ORIGIN}/voice-ai` },
  { label: "Document Intelligence", href: `${ORIGIN}/document-intelligence` },
  { label: "DPDP Compliance", href: `${ORIGIN}/dpdp-compliance` },
  { label: "Supply Chain AI", href: `${ORIGIN}/supply-chain-ai` },
  { label: "RAG & Knowledge", href: `${ORIGIN}/rag-knowledge` }
];

const defaultToolkitCards: ToolkitCard[] = [
  {
    title: "Agentic AI Platforms",
    body: "Multi-agent orchestration on LangGraph. Reasoning, routing, and embedding tiers coordinated across complex enterprise workflows — in-VPC on AWS Bedrock.",
    learnMoreHref: `${ORIGIN}/ai-agents`,
    media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&q=80"
  },
  {
    title: "Voice AI & Conversational Agents",
    body: "Sub-300ms inbound voice agents with Hindi and eight regional languages in production. Built for dealer lines, support, and sales—where code-switching and noisy environments are normal.",
    learnMoreHref: `${ORIGIN}/voice-ai`,
    media: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&q=80"
  },
  {
    title: "Document Intelligence & IDP",
    body: "LLM-powered extraction from invoices, contracts, and KYC packs. Typical deployments cut review time materially—logged fields, reviewer UI, and export into your LOS or ERP.",
    learnMoreHref: `${ORIGIN}/document-intelligence`,
    media: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&auto=format&q=80"
  },
  {
    title: "DPDP & AI Compliance",
    body: "India's DPDP Act — enforcement stepping up through 2026. PII detection, consent workflows, audit trails, and data residency—with evidence your legal and security teams can stand behind.",
    learnMoreHref: `${ORIGIN}/dpdp-compliance`,
    media: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&q=80"
  },
  {
    title: "Supply Chain & Ops AI",
    body: "Demand forecasting, dispatch optimisation, and computer vision QC at FMCG and logistics scale—models and dashboards your ops team actually uses.",
    learnMoreHref: `${ORIGIN}/supply-chain-ai`,
    media: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&q=80"
  },
  {
    title: "RAG & Knowledge Systems",
    body: "Private data, made searchable. Pinecone and Weaviate vector pipelines with hybrid search and cited answers. Start with the ₹5–8L, 4-week pilot.",
    learnMoreHref: `${ORIGIN}/rag-knowledge`,
    media: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&q=80"
  }
];

const defaultImpactStats = [
  { value: "30+", label: "In-House Engineers" },
  { value: "75+", label: "Successful Projects" }
];

const defaultIntelligenceMetrics = [
  "VPC and tenant-boundary deployments",
  "Reviewable logs—not black-box prompts",
  "Fixed-scope pilots before platform bets"
];
const defaultAudienceCards = [
  {
    eyebrow: "FOR FOUNDERS",
    title: "Build a Product",
    description:
      "We act as your technical co-founder. From MVP to scale, we turn your ambitious vision into a market-ready reality.",
    chips: ["Product build", "MVP → scale", "Gen-AI apps"],
    ctaLabel: "Build a Product",
    ctaHref: `${ORIGIN}/contact?type=founder`
  },
  {
    eyebrow: "FOR ENTERPRISE",
    title: "Deploy a Solution",
    description:
      "Automate high-friction workflows with agents you can observe and roll back. We integrate with your systems of record—not a sidebar chat that ignores approvals.",
    chips: ["Voice AI", "Process automation", "Agents"],
    ctaLabel: "Deploy a Solution",
    ctaHref: `${ORIGIN}/contact?type=enterprise`
  }
];

const defaultFooterLinks = [
  { section: "solutions", label: "Agentic AI", href: `${ORIGIN}/ai-agents` },
  { section: "solutions", label: "Voice AI", href: `${ORIGIN}/voice-ai` },
  { section: "solutions", label: "Document Intelligence", href: `${ORIGIN}/document-intelligence` },
  { section: "solutions", label: "DPDP Compliance", href: `${ORIGIN}/dpdp-compliance` },
  { section: "solutions", label: "Supply Chain AI", href: `${ORIGIN}/supply-chain-ai` },
  { section: "solutions", label: "RAG & Knowledge", href: `${ORIGIN}/rag-knowledge` },
  { section: "company", label: "About", href: `${ORIGIN}/about` },
  { section: "company", label: "Case Studies", href: `${ORIGIN}/projects` },
  { section: "company", label: "Careers", href: `${ORIGIN}/careers` },
  { section: "company", label: "Contact", href: `${ORIGIN}/contact` },
  { section: "legal", label: "Privacy", href: `${ORIGIN}/privacy` },
  { section: "legal", label: "Terms", href: `${ORIGIN}/terms` }
] as const;
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const statValuePattern = /^(\d+)(\+?)$/;

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase }
  }
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: smoothEase }
  }
};

function AnimatedStat({ value, reducedMotion }: { value: string; reducedMotion: boolean }) {
  const targetRef = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(targetRef, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(() => value);
  const parsed = useMemo(() => {
    const match = value.match(statValuePattern);
    if (!match) {
      return null;
    }
    return {
      number: Number.parseInt(match[1], 10),
      suffix: match[2] ?? ""
    };
  }, [value]);

  useEffect(() => {
    if (!parsed || reducedMotion || !isInView) {
      setDisplay(value);
      return;
    }

    const durationMs = 900;
    const start = performance.now();
    let rafId = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / durationMs, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(parsed.number * eased);
      setDisplay(`${current}${parsed.suffix}`);
      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [isInView, parsed, reducedMotion, value]);

  return (
    <p ref={targetRef} className="pc-stat-num">
      {display}
    </p>
  );
}

export function LandingPage({ content }: { content?: LandingContent }) {
  const { theme, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotion() ?? false;
  const reduceHeavyMotion = reducedMotion;
  const serviceLinks = content?.serviceLinks?.length ? content.serviceLinks : defaultServiceLinks;
  const toolkitCards = content?.toolkitCards?.length ? content.toolkitCards : defaultToolkitCards;
  const impactStats = content?.impactStats?.length ? content.impactStats : defaultImpactStats;
  const intelligenceMetrics = content?.intelligenceMetrics?.length ? content.intelligenceMetrics : defaultIntelligenceMetrics;
  const audienceCards = content?.audienceCards?.length ? content.audienceCards : defaultAudienceCards;
  const footerLinks = content?.footerLinks?.length ? content.footerLinks : defaultFooterLinks;
  const heroTitle = content?.heroTitle ?? "AI in production.\nEmbedded with your team.\nWeeks, not quarters.";
  const heroDescription =
    content?.heroDescription ??
    "We embed engineers alongside founders and enterprises in India, Australia, and Singapore. Agentic AI, voice, documents, compliance, supply chain, and knowledge systems—scoped, built, and shipped with clear milestones.";
  const aboutText =
    content?.aboutText ??
    "Engineering intelligence for operations and product teams. Forward-deployed delivery. India · Australia · Singapore.";
  const toolkitHeading = content?.toolkitHeading ?? "THE TOOLKIT";
  const toolkitDescription = content?.toolkitDescription ?? "Our engineering core covers the entire spectrum of modern AI development.";
  const impactHeading = content?.impactHeading ?? "SYSTEMS THAT\nDELIVER IMPACT.";
  const impactDescription =
    content?.impactDescription ??
    "Forget the buzzwords. We build high-performance AI solutions designed to improve your bottom line. Measurable impact, not just hype.";
  const ctaHeading = content?.ctaHeading ?? "READY TO BUILD?";
  const ctaDescription =
    content?.ctaDescription ??
    "Whether you're a founder with a vision or an enterprise with a problem, we have the engineering team to solve it.";
  const contactHeading = content?.contactHeading ?? "Contact";
  const contactDescription = content?.contactDescription ?? "Get in touch with our engineering team to discuss your AI project.";
  const qualifyUrl = `${ORIGIN}/qualify`;
  const contactEmail = content?.contactEmail ?? "hello@agentspod.ai";
  const footerTagline = content?.footerTagline ?? "Engineering Intelligence.";
  const footerSubtitle = content?.footerSubtitle ?? "We build the AI infrastructure for founders and enterprises.";
  const copyrightText = content?.copyrightText ?? "© 2026 Agentspod.AI. All rights reserved.";
  const heroImageSrc = content?.heroImageUrl ?? "/media/TOLMQ.png";
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const heroCopyY = useTransform(heroScrollProgress, [0, 1], [0, -24]);
  const heroArtY = useTransform(heroScrollProgress, [0, 1], [0, -48]);
  const heroArtScale = useTransform(heroScrollProgress, [0, 1], [1, 1.04]);
  const heroArtOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0.86]);

  return (
    <LazyMotion features={domAnimation}>
      <m.main className="pc-page">
      <m.header
        className="pc-header"
        initial={reduceHeavyMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceHeavyMotion ? 0 : 0.45, ease: "easeOut" }}
      >
        <div className="pc-wrap pc-header-row">
          <a className="pc-brand" href="#home">
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
            <ComponentNavMenuItemLink href={`${ORIGIN}/projects`}>
              Case Studies
            </ComponentNavMenuItemLink>
            <ComponentNavMenuItemLink href="/about">
              About us
            </ComponentNavMenuItemLink>
            <ComponentNavMenuItemLink href={`${ORIGIN}/careers`}>
              Careers
            </ComponentNavMenuItemLink>
            <ComponentNavMenuItemLink href="#contact">Contact</ComponentNavMenuItemLink>
          </nav>
          <div className="pc-header-ctas">
            <m.button
              type="button"
              className="pc-btn pc-btn-ghost-header pc-theme-toggle"
              aria-label="Theme toggle"
              aria-pressed={theme === "light"}
              onClick={toggleTheme}
              whileHover={reduceHeavyMotion ? undefined : { y: -1 }}
              whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
            >
              {theme === "light" ? "Light" : "Dark"}
            </m.button>
            <m.a
              className="pc-btn pc-btn-primary-header pc-btn-anchor"
              href={qualifyUrl}
              whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
              whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
            >
              Book a meet →
            </m.a>
          </div>
        </div>
      </m.header>
      <nav className="pc-wrap pc-mobile-nav" aria-label="Primary mobile navigation">
        <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={`${ORIGIN}/ai-agents`}>
          Services
        </a>
        <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={`${ORIGIN}/projects`}>
          Case Studies
        </a>
        <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="/about">
          About us
        </a>
        <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={`${ORIGIN}/careers`}>
          Careers
        </a>
        <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="#contact">
          Contact
        </a>
      </nav>

      <m.section
        className="pc-wrap pc-hero"
        id="home"
        ref={heroRef}
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <m.div className="pc-hero-copy" style={reduceHeavyMotion ? undefined : { y: heroCopyY }}>
          <ComponentTextH1Hero>
            {heroTitle.split("\n").map((line, index, all) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < all.length - 1 ? <br /> : null}
              </span>
            ))}
          </ComponentTextH1Hero>
          <ComponentTextBodyLarge>
            {heroDescription}
          </ComponentTextBodyLarge>
          <div className="pc-hero-ctas">
            <m.a
              className="pc-btn pc-btn-primary-hero pc-btn-anchor"
              href="#contact"
              whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
              whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
            >
              START YOUR PROJECT
            </m.a>
            <m.a
              className="pc-btn pc-btn-ghost-hero pc-btn-anchor"
              href={qualifyUrl}
              whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
              whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
            >
              Book a meet
            </m.a>
          </div>
        </m.div>
        <m.div
          className="pc-hero-art"
          aria-hidden="true"
          style={reduceHeavyMotion ? undefined : { y: heroArtY, scale: heroArtScale, opacity: heroArtOpacity }}
        >
          <div className="pc-hero-art-surface pc-hero-art-surface-plain">
            <div className="pc-hero-rubrik-wrap">
              <ComponentMediaHeroCube
                className="pc-hero-video-fill"
                src={heroImageSrc}
              />
            </div>
          </div>
        </m.div>
        <m.div
          className="pc-hero-brands"
          variants={reduceHeavyMotion ? undefined : sectionVariants}
          initial={reduceHeavyMotion ? undefined : "hidden"}
          whileInView={reduceHeavyMotion ? undefined : "visible"}
          viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.12 }}
        >
          <div className="pc-hero-brands-inner">
            <ComponentLogoAIBrandsStripPencilInline />
          </div>
        </m.div>
      </m.section>

      <m.div
        className="pc-dpdp-banner"
        initial={reduceHeavyMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="pc-wrap pc-dpdp-banner-inner">
          <span className="pc-dpdp-badge">DEADLINE</span>
          <span className="pc-dpdp-text">
            DPDP enforcement — November 2026 · ₹250Cr per violation · Zero Indian AI firms own this category
          </span>
          <a className="pc-dpdp-link" href={`${ORIGIN}/dpdp-compliance`}>
            See the sprint →
          </a>
        </div>
      </m.div>

      <m.section
        className="pc-wrap pc-about-strip"
        id="about"
        aria-labelledby="about-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <h2 id="about-heading" className="visually-hidden">
          About
        </h2>
        <ComponentTextBodyLarge>
          {aboutText}
        </ComponentTextBodyLarge>
      </m.section>

      <m.section
        className="pc-wrap pc-section"
        aria-labelledby="audiences-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <h2 id="audiences-heading" className="visually-hidden">
          For founders and enterprise
        </h2>
        <m.div
          className="pc-audience-grid"
          variants={reduceHeavyMotion ? undefined : staggerContainerVariants}
          initial={reduceHeavyMotion ? undefined : "hidden"}
          whileInView={reduceHeavyMotion ? undefined : "visible"}
          viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        >
          {audienceCards.map((card) => (
            <m.div key={card.title} className="pc-audience-card" variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
              <p className="pc-eyebrow">{card.eyebrow}</p>
              <ComponentTextH2Section className="pc-audience-h2">{card.title}</ComponentTextH2Section>
              <ComponentTextBodyLarge>{card.description}</ComponentTextBodyLarge>
              <div className="pc-chip-row">
                {card.chips.map((chip) => (
                  <ComponentBadgePillTagDefault key={chip}>{chip}</ComponentBadgePillTagDefault>
                ))}
              </div>
              <div className="pc-audience-ctas">
                <m.a
                  className="pc-btn pc-btn-primary-hero pc-btn-anchor"
                  href={card.ctaHref}
                  whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
                  whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
                >
                  {card.ctaLabel}
                </m.a>
              </div>
            </m.div>
          ))}
        </m.div>
      </m.section>

      <m.section
        className="pc-wrap pc-section"
        id="toolkit"
        aria-labelledby="toolkit-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <ComponentTextH2Section id="toolkit-heading">{toolkitHeading}</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          {toolkitDescription}
        </ComponentTextBodyLarge>
        <m.div
          className="pc-card-grid is-toolkit"
          variants={reduceHeavyMotion ? undefined : staggerContainerVariants}
          initial={reduceHeavyMotion ? undefined : "hidden"}
          whileInView={reduceHeavyMotion ? undefined : "visible"}
          viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        >
          {toolkitCards.map((card) => (
            <m.div key={card.title} variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
              <ComponentCardFeature
                title={card.title}
                body={card.body}
                media={card.media}
                learnMoreHref={card.learnMoreHref}
                learnMoreLabel={card.learnMoreLabel ?? "Learn more"}
                learnMoreTarget={card.learnMoreHref.startsWith("http") ? "_blank" : undefined}
                learnMoreRel={card.learnMoreHref.startsWith("http") ? "noopener noreferrer" : undefined}
              />
            </m.div>
          ))}
        </m.div>
      </m.section>

      <m.section
        className="pc-wrap pc-section pc-rag-pilot"
        id="rag-pilot"
        aria-labelledby="rag-pilot-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <p className="pc-eyebrow">ENTRY OFFER</p>
        <ComponentTextH2Section id="rag-pilot-heading">START WITH A RAG PILOT</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          Your knowledge is already in your documents, SharePoint, and Notion. The RAG Pilot makes it searchable and properly cited. Four weeks. Fixed scope. Fixed price.
        </ComponentTextBodyLarge>
        <m.div
          className="pc-rag-pilot-grid"
          variants={reduceHeavyMotion ? undefined : staggerContainerVariants}
          initial={reduceHeavyMotion ? undefined : "hidden"}
          whileInView={reduceHeavyMotion ? undefined : "visible"}
          viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        >
          <m.div className="pc-rag-pilot-stat" variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
            <p className="pc-stat-num">4</p>
            <ComponentTextBodySmall>Weeks. Fixed timeline.</ComponentTextBodySmall>
          </m.div>
          <m.div className="pc-rag-pilot-stat" variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
            <p className="pc-stat-num">₹5–8L</p>
            <ComponentTextBodySmall>Fixed price. No surprises.</ComponentTextBodySmall>
          </m.div>
          <m.div className="pc-rag-pilot-stat" variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
            <p className="pc-stat-num">1</p>
            <ComponentTextBodySmall>Clear deliverable: your docs, made searchable.</ComponentTextBodySmall>
          </m.div>
        </m.div>
        <div className="pc-hero-ctas is-centered">
          <m.a
            className="pc-btn pc-btn-primary-hero pc-btn-anchor"
            href={`${ORIGIN}/rag-knowledge`}
            whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
            whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
          >
            START WITH THE RAG PILOT →
          </m.a>
        </div>
      </m.section>

      <FeaturedWork />

      <m.section
        className="pc-wrap pc-section"
        id="impact"
        aria-labelledby="impact-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <ComponentTextH2Section id="impact-heading">
          {impactHeading.split("\n").map((line, index, all) => (
            <span key={`${line}-${index}`}>
              {line}
              {index < all.length - 1 ? <br /> : null}
            </span>
          ))}
        </ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          {impactDescription}
        </ComponentTextBodyLarge>
        <m.div
          className="pc-stats-row"
          variants={reduceHeavyMotion ? undefined : staggerContainerVariants}
          initial={reduceHeavyMotion ? undefined : "hidden"}
          whileInView={reduceHeavyMotion ? undefined : "visible"}
          viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        >
          {impactStats.map((row) => (
            <m.div key={row.label} variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
              <AnimatedStat value={row.value} reducedMotion={reducedMotion} />
              <ComponentTextBodySmall>{row.label}</ComponentTextBodySmall>
            </m.div>
          ))}
        </m.div>
        <p className="pc-eyebrow" style={{ textAlign: "center", marginTop: 48 }}>
          Intelligence Metrics
        </p>
        <m.div
          className="pc-impact-metrics"
          variants={reduceHeavyMotion ? undefined : staggerContainerVariants}
          initial={reduceHeavyMotion ? undefined : "hidden"}
          whileInView={reduceHeavyMotion ? undefined : "visible"}
          viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.3 }}
        >
          {intelligenceMetrics.map((label, index) => (
            <m.div key={label} variants={reduceHeavyMotion ? undefined : staggerItemVariants}>
              <ComponentTabsFeatureDefault active={index === 0}>{label}</ComponentTabsFeatureDefault>
            </m.div>
          ))}
        </m.div>
      </m.section>

      <m.section
        className="pc-wrap pc-section pc-cta"
        id="start"
        aria-labelledby="cta-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <ComponentTextH2Section id="cta-heading">{ctaHeading}</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          {ctaDescription}
        </ComponentTextBodyLarge>
        <div className="pc-hero-ctas is-centered">
          <m.a
            className="pc-btn pc-btn-primary-hero pc-btn-anchor"
            href={`${ORIGIN}/contact`}
            whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
            whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
          >
            START YOUR PROJECT
          </m.a>
        </div>
      </m.section>

      <m.section
        className="pc-wrap pc-contact-block"
        id="contact"
        aria-labelledby="contact-heading"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <ComponentTextH2Section id="contact-heading">{contactHeading}</ComponentTextH2Section>
        <ComponentTextBodyLarge className="pc-section-copy">
          {contactDescription}
        </ComponentTextBodyLarge>
        <div className="pc-contact-links">
          <m.a
            className="pc-btn pc-btn-primary-hero pc-btn-anchor"
            href={qualifyUrl}
            whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
            whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
          >
            Book a strategy call
          </m.a>
          <m.a
            className="pc-btn pc-btn-ghost-hero pc-btn-anchor"
            href={`mailto:${contactEmail}`}
            whileHover={reduceHeavyMotion ? undefined : { y: -2 }}
            whileTap={reduceHeavyMotion ? undefined : { scale: 0.98 }}
          >
            Email us
          </m.a>
        </div>
      </m.section>

      <m.footer
        className="pc-footer"
        id="resources"
        initial={reduceHeavyMotion ? undefined : "hidden"}
        whileInView={reduceHeavyMotion ? undefined : "visible"}
        viewport={reduceHeavyMotion ? undefined : { once: true, amount: 0.2 }}
        variants={reduceHeavyMotion ? undefined : sectionVariants}
      >
        <div className="pc-wrap pc-footer-grid is-agentspod">
          <div>
            <a className="pc-brand" href="#home">
              <ComponentLogoAIAgentsPodCubeMark className="pc-brand-logo-cube-mark" />
            </a>
            <ComponentTextBodySmall>{footerTagline}</ComponentTextBodySmall>
            <ComponentTextBodySmall>{footerSubtitle}</ComponentTextBodySmall>
            <div className="pc-footer-social">
              <a href="https://www.linkedin.com/company/agentspod-ai" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${contactEmail}`}>Email</a>
              <a href={qualifyUrl}>
                Book a Meeting
              </a>
            </div>
            <ComponentFooterStatusPillDefault>{copyrightText}</ComponentFooterStatusPillDefault>
          </div>
          <div className="pc-footer-col">
            <h5>Solutions</h5>
            {footerLinks
              .filter((link) => link.section === "solutions")
              .map((link) => (
                <a key={link.label} className="pc-text-body-soft" href={link.href}>
                  {link.label}
                </a>
              ))}
          </div>
          <div className="pc-footer-col">
            <h5>Company</h5>
            {footerLinks
              .filter((link) => link.section === "company")
              .map((link) => (
                <a key={link.label} className="pc-text-body-soft" href={link.href}>
                  {link.label}
                </a>
              ))}
          </div>
          <div className="pc-footer-col">
            <h5>Legal</h5>
            {footerLinks
              .filter((link) => link.section === "legal")
              .map((link) => (
                <a key={link.label} className="pc-text-body-soft" href={link.href}>
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </m.footer>
    </m.main>
    </LazyMotion>
  );
}
