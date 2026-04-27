import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "surface-page": "var(--surface-page)",
        "surface-raised": "var(--surface-raised)",
        "surface-panel": "var(--surface-panel)",
        "surface-solid": "var(--surface-solid)",
        "foreground-default": "var(--foreground-default)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",
        "accent-primary": "var(--accent-primary)",
        "accent-strong": "var(--accent-strong)",
        "accent-contrast": "var(--accent-contrast)",
        "border-subtle": "var(--border-subtle)",
        "border-strong": "var(--border-strong)"
      },
      boxShadow: {
        premium: "var(--shadow-premium)"
      },
      backgroundImage: {
        "premium-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0) 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
