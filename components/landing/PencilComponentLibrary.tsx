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
