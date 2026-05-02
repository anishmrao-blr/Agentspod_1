import { useTheme } from "@/components/theme/useTheme";
import {
  ComponentLogoAIAgentsPodCubeMark,
  ComponentNavMenuItemLink
} from "./PencilComponentLibrary";

const ORIGIN = "";

const serviceLinks = [
  { label: "AI Agents", href: `${ORIGIN}/ai-agents` },
  { label: "Generative AI", href: `${ORIGIN}/gen-ai` },
  { label: "Data Science", href: `${ORIGIN}/data-science` },
  { label: "Voice AI", href: `${ORIGIN}/voice-ai` },
  { label: "Software Dev", href: `${ORIGIN}/software-development` }
];

const CALENDAR_HREF = "https://cal.com/swami-tpxjxh";

export type SiteHeaderProps = {
  /** Passed to the mobile nav landmark for screen readers (e.g. "Case studies mobile navigation"). */
  mobileNavAriaLabel: string;
  /** Logo link target; home page uses `#home`, internal routes use `/`. */
  brandHref?: string;
};

export function SiteHeader({ mobileNavAriaLabel, brandHref = "/" }: SiteHeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="pc-header">
        <div className="pc-wrap pc-header-row">
          <a className="pc-brand" href={brandHref}>
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
            <ComponentNavMenuItemLink href={`${ORIGIN}/about`}>About us</ComponentNavMenuItemLink>
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
              href={CALENDAR_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a meet →
            </a>
          </div>
        </div>
      </header>
      <nav className="pc-wrap pc-mobile-nav" aria-label={mobileNavAriaLabel}>
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
        <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href={`${ORIGIN}/contact`}>
          Contact
        </a>
      </nav>
    </>
  );
}
