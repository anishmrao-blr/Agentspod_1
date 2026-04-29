/* eslint-disable @next/next/no-img-element */
import type { HeroAiBrand } from "@/lib/directusLanding";
import React from "react";

type BaseProps = {
  children?: React.ReactNode;
  className?: string;
};

type ButtonState = "default" | "hover" | "pressed" | "disabled";

type ButtonProps = BaseProps & {
  state?: ButtonState;
};

type TabProps = BaseProps & {
  active?: boolean;
};

type CardState = "default" | "hover" | "pressed";

type CardProps = BaseProps & {
  state?: CardState;
  title: string;
  body: string;
  media?: string;
  learnMoreHref?: string;
  learnMoreLabel?: string;
  learnMoreTarget?: React.HTMLAttributeAnchorTarget;
  learnMoreRel?: string;
};

function cls(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function ComponentBadgeAnnouncementDefault({ children, className }: BaseProps) {
  return <span className={cls("pc-badge-announcement", className)}>{children ?? "Announcing Resend Forward"}</span>;
}

export function ComponentBadgePillTagDefault({ children, className }: BaseProps) {
  return <span className={cls("pc-badge-pill", className)}>{children ?? "Send with Next.js"}</span>;
}

export function ComponentAvatarRoundDefault({ className }: BaseProps) {
  return <span className={cls("pc-avatar-round", className)} aria-hidden="true" />;
}

export function ComponentButtonPrimaryHero({
  state = "default",
  children,
  className
}: ButtonProps) {
  return (
    <button className={cls("pc-btn pc-btn-primary-hero", `is-${state}`, className)} disabled={state === "disabled"}>
      {children ?? "Get Started"}
    </button>
  );
}

export function ComponentButtonGhostHero({
  state = "default",
  children,
  className
}: ButtonProps) {
  return (
    <button className={cls("pc-btn pc-btn-ghost-hero", `is-${state}`, className)} disabled={state === "disabled"}>
      {children ?? "Documentation"}
    </button>
  );
}

export function ComponentButtonPrimaryHeader({ children, className }: BaseProps) {
  return <button className={cls("pc-btn pc-btn-primary-header", className)}>{children ?? "Get Started"}</button>;
}

export function ComponentButtonGhostHeader({ children, className }: BaseProps) {
  return <button className={cls("pc-btn pc-btn-ghost-header", className)}>{children ?? "Log In"}</button>;
}

export function ComponentTabsLanguageDefault({ active, children, className }: TabProps) {
  return <button className={cls("pc-tab pc-tab-language", active && "is-active", className)}>{children}</button>;
}

export function ComponentTabsFeatureDefault({ active, children, className }: TabProps) {
  return <button className={cls("pc-tab pc-tab-feature", active && "is-active", className)}>{children}</button>;
}

export function ComponentCardFeature({
  state = "default",
  title,
  body,
  media,
  className,
  learnMoreHref = "#learn-more",
  learnMoreLabel = "Learn more",
  learnMoreTarget,
  learnMoreRel
}: CardProps) {
  return (
    <article className={cls("pc-card-feature", `is-${state}`, className)}>
      <div className="pc-card-media" style={media ? { backgroundImage: `url(${media})` } : undefined} />
      <h3>{title}</h3>
      <p>{body}</p>
      <a href={learnMoreHref} target={learnMoreTarget} rel={learnMoreRel}>
        {learnMoreLabel}
      </a>
    </article>
  );
}

export function ComponentTextH1Hero({ children, className }: BaseProps) {
  return <h1 className={cls("pc-text-h1-hero", className)}>{children ?? "Email for developers"}</h1>;
}

export function ComponentTextH2Section({ children, className, id }: BaseProps & { id?: string }) {
  return (
    <h2 id={id} className={cls("pc-text-h2-section", className)}>
      {children}
    </h2>
  );
}

export function ComponentTextBodyLarge({ children, className }: BaseProps) {
  return <p className={cls("pc-text-body-large", className)}>{children}</p>;
}

export function ComponentTextBodySmall({ children, className }: BaseProps) {
  return <p className={cls("pc-text-body-small", className)}>{children}</p>;
}

export function ComponentTextLinkDefault({ children, className }: BaseProps) {
  return (
    <a className={cls("pc-text-link", className)} href="#learn-more">
      {children ?? "Learn more"}
    </a>
  );
}

export function ComponentTextBodySoftDefault({ children, className }: BaseProps) {
  return <p className={cls("pc-text-body-soft", className)}>{children}</p>;
}

export function ComponentTextBodyFadeDefault({ children, className }: BaseProps) {
  return <p className={cls("pc-text-body-fade", className)}>{children}</p>;
}

export function ComponentTextBodyFaintDefault({ children, className }: BaseProps) {
  return <p className={cls("pc-text-body-faint", className)}>{children}</p>;
}

export function ComponentTextBodyGhostDefault({ children, className }: BaseProps) {
  return <p className={cls("pc-text-body-ghost", className)}>{children}</p>;
}

export function ComponentTextStatusSuccessTintDefault({ children, className }: BaseProps) {
  return <p className={cls("pc-text-status-success-tint", className)}>{children}</p>;
}

export function ComponentTextCodeFadeDefault({ children, className }: BaseProps) {
  return <code className={cls("pc-text-code-fade", className)}>{children}</code>;
}

export function ComponentTextFxGradientHeroAccent({ children, className }: BaseProps) {
  return <span className={cls("pc-text-fx-gradient-hero-accent", className)}>{children ?? "Integrate"}</span>;
}

type NavLinkProps = BaseProps & {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export function ComponentNavMenuItemWithChevron({ children, className, href = "#features", target, rel }: NavLinkProps) {
  return (
    <a className={cls("pc-nav-item has-chevron", className)} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

export function ComponentNavMenuItemLink({ children, className, href = "#pricing", target, rel }: NavLinkProps) {
  return (
    <a className={cls("pc-nav-item", className)} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

export function ComponentFooterStatusPillDefault({ children, className }: BaseProps) {
  return <div className={cls("pc-footer-status", className)}>{children ?? "All systems operational"}</div>;
}

type AgentsPodLogoProps = {
  className?: string;
  alt?: string;
};

// Mirrors Pencil node YoQcN: Component/Logo/AI/AgentsPod
export function ComponentLogoAIAgentsPod({ className, alt = "AgentsPod.ai" }: AgentsPodLogoProps) {
  return (
    <span className={cls("pc-logo-ai-agentspod", className)} aria-label={alt}>
      <img
        className="pc-logo-ai-agentspod-image"
        src="/logos/ai-official/agentspod-ai.png"
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

type AgentsPodCubeMarkProps = {
  className?: string;
  alt?: string;
};

// Mirrors Pencil node kL7wC: AgentsPod Cube Mark
export function ComponentLogoAIAgentsPodCubeMark({ className, alt = "AgentsPod.ai" }: AgentsPodCubeMarkProps) {
  return (
    <img
      className={cls("pc-logo-ai-agentspod-cube-mark", className)}
      src="/logos/ai-official/agentspod-cube.png"
      alt={alt}
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  );
}

type RubrikCubeLogoProps = {
  className?: string;
  alt?: string;
};

// Mirrors Pencil node BbzgE: Rubrik Cube Mark
export function ComponentLogoAIRubrikCube({ className, alt = "Rubrik Cube" }: RubrikCubeLogoProps) {
  return (
    <span className={cls("pc-logo-ai-rubrik-cube", className)} aria-label={alt}>
      <img
        className="pc-logo-ai-rubrik-cube-image"
        src="/logos/ai-official/rubrik-cube.png"
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

type HeroVideoContainerProps = {
  className?: string;
  src?: string;
  poster?: string;
  liteMode?: boolean;
};

// Mirrors Pencil node IbQgr: Component/Media/Hero/VideoContainer
export function ComponentMediaHeroVideoContainer({
  className,
  src = "/videos/ai-agency-hero.mp4",
  poster,
  liteMode = false
}: HeroVideoContainerProps) {
  return (
    <div className={cls("pc-hero-video-container", className)}>
      <video
        className="pc-hero-video"
        src={src}
        poster={poster ?? undefined}
        autoPlay
        loop
        muted
        playsInline
        preload={liteMode ? "none" : "metadata"}
      />
    </div>
  );
}

type ImportedHeroImageProps = {
  className?: string;
  src?: string;
  alt?: string;
};

// Mirrors Pencil node J2m3t: Component/Media/Imported/ImagePNG
export function ComponentMediaImportedImagePng({
  className,
  src = "/media/J2m3t.png",
  alt = ""
}: ImportedHeroImageProps) {
  return (
    <div className={cls("pc-hero-video-container", "pc-hero-media-plain", className)}>
      <img className="pc-hero-video" src={src} alt={alt} loading="eager" decoding="async" fetchPriority="high" />
    </div>
  );
}

type HeroCubeMediaProps = {
  className?: string;
  src?: string;
  alt?: string;
};

// Mirrors Pencil node TOLMQ: Component/Media/Hero/Cube
export function ComponentMediaHeroCube({
  className,
  src = "/media/TOLMQ.png",
  alt = "Hero cube"
}: HeroCubeMediaProps) {
  return (
    <div className={cls("pc-hero-video-container", "pc-hero-media-plain", "pc-hero-cube-media", className)}>
      <img className="pc-hero-video" src={src} alt={alt} loading="eager" decoding="async" fetchPriority="high" />
    </div>
  );
}

const DEFAULT_HERO_BRAND_PLACEHOLDERS = 7;

// Mirrors Pencil U9pp4: Component/Logo/AI/BrandsStrip/Placeholder (+ zCS3C slot). `brands` from Directus when ready.
export function ComponentLogoAIBrandsStrip({
  className,
  brands,
  placeholderCount = DEFAULT_HERO_BRAND_PLACEHOLDERS
}: {
  className?: string;
  brands?: HeroAiBrand[] | null;
  /** Shown when `brands` is missing or empty; matches Pencil default strip. */
  placeholderCount?: number;
}) {
  const slots: HeroAiBrand[] =
    brands && brands.length > 0
      ? brands
      : Array.from({ length: Math.max(1, placeholderCount) }, () => ({
          name: "",
          logoSrc: null,
          href: null,
          alt: null
        }));

  return (
    <div className={cls("pc-ai-brands-strip", className)} role="list" aria-label="AI technology partners">
      {slots.map((brand, index) => {
        const key = brand.name || `placeholder-${index}`;
        const hasLogo = Boolean(brand.logoSrc);
        const alt = brand.alt?.trim() || brand.name || "Partner logo";
        const inner = (
          <div className="pc-ai-brand-slot">
            <div className="pc-ai-brand-slot-media">
              {hasLogo ? (
                <img src={brand.logoSrc!} alt={alt} className="pc-ai-brand-slot-img" loading="lazy" decoding="async" />
              ) : null}
            </div>
            {!hasLogo ? (
              <span className="pc-ai-brand-slot-hint">{brand.name.trim() ? brand.name : "AI brand"}</span>
            ) : null}
          </div>
        );

        const href = brand.href?.trim();
        if (href) {
          return (
            <a key={`${key}-${index}`} className="pc-ai-brand-slot-link" href={href} role="listitem" target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          );
        }

        return (
          <div key={`${key}-${index}`} role="listitem" className="pc-ai-brand-slot-wrap">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

type InlineLogoSlot = {
  id: string;
  name: string;
  href?: string;
  viewBox: string;
  /** Dark theme: asset is dark-on-transparent — invert SVG so it reads on black. */
  invertOnDark?: boolean;
  render: () => React.ReactNode;
};

function InlineSvgLogo({
  title,
  viewBox,
  children,
  className
}: {
  title: string;
  viewBox: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg className={cls("pc-ai-brand-slot-svg", className)} viewBox={viewBox} role="img" aria-label={title}>
      {children}
    </svg>
  );
}

const PENCIL_INLINE_LOGOS: InlineLogoSlot[] = [
  {
    id: "viaJC",
    name: "AWS",
    href: "https://aws.amazon.com",
    viewBox: "0 0 304 182",
    render: () => (
      <image href="/logos/hero-partners/aws.svg" x="0" y="0" width="304" height="182" preserveAspectRatio="xMidYMid meet" />
    )
  },
  {
    id: "eUxYq",
    name: "Google Cloud",
    href: "https://cloud.google.com",
    viewBox: "0 0 181 28",
    render: () => (
      <image href="/logos/hero-partners/google-cloud.svg" x="0" y="0" width="181" height="28" preserveAspectRatio="xMidYMid meet" />
    )
  },
  {
    id: "vTWYk",
    name: "OpenAI",
    href: "https://openai.com",
    invertOnDark: true,
    viewBox: "0 0 1180 320",
    render: () => (
      <image href="/logos/ai-official/openai.svg" x="0" y="0" width="1180" height="320" preserveAspectRatio="xMidYMid meet" />
    )
  },
  {
    id: "Y4qmM",
    name: "LangChain",
    href: "https://www.langchain.com",
    viewBox: "0 0 210 48",
    render: () => (
      <>
        <g fill="#00A5FF">
          <rect x="12" y="12" width="16" height="16" rx="3" />
          <rect x="22" y="20" width="16" height="16" rx="3" />
        </g>
        <text x="52" y="31" fill="currentColor" fontSize="20" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">
          LangChain
        </text>
      </>
    )
  },
  {
    id: "BWIeX",
    name: "ElevenLabs",
    href: "https://elevenlabs.io",
    viewBox: "0 0 240 48",
    render: () => (
      <>
        <rect x="16" y="11" width="9" height="26" fill="currentColor" />
        <rect x="31" y="11" width="9" height="26" fill="currentColor" />
        <text x="54" y="31" fill="currentColor" fontSize="20" fontWeight="600" fontFamily="Inter,system-ui,sans-serif">
          ElevenLabs
        </text>
      </>
    )
  }
];

// Uses selected Pencil nodes: viaJC, eUxYq, vTWYk, Y4qmM, BWIeX.
export function ComponentLogoAIBrandsStripPencilInline({ className }: { className?: string }) {
  return (
    <div className={cls("pc-ai-brands-strip", "pc-ai-brands-strip--bare", className)} role="list" aria-label="AI technology partners">
      {PENCIL_INLINE_LOGOS.map((logo) => {
        const inner = (
          <div className="pc-ai-brand-slot">
            <div className={cls("pc-ai-brand-slot-media", logo.invertOnDark && "is-invert-on-dark")}>
              <InlineSvgLogo title={logo.name} viewBox={logo.viewBox}>
                {logo.render()}
              </InlineSvgLogo>
            </div>
          </div>
        );

        if (logo.href) {
          return (
            <a
              key={logo.id}
              className="pc-ai-brand-slot-link"
              href={logo.href}
              role="listitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              {inner}
            </a>
          );
        }

        return (
          <div key={logo.id} role="listitem" className="pc-ai-brand-slot-wrap">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
