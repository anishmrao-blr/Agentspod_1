import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactNode } from "react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { LandingPage } from "@/components/landing/LandingPage";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";

const globalStylesCss = readFileSync(resolve(process.cwd(), "styles/globals.css"), "utf8");

function renderWithThemeProvider(children: ReactNode = <LandingPage />) {
  return render(<ThemeProvider>{children}</ThemeProvider>);
}

function getThemeBlock(theme: "light" | "dark") {
  const pattern =
    theme === "light"
      ? /\[data-theme="light"\]\s*\{([\s\S]*?)\}/
      : /:root,\s*\[data-theme="dark"\]\s*\{([\s\S]*?)\}/;
  const match = globalStylesCss.match(pattern);
  return match?.[1] ?? "";
}

function getThemeTokenValue(theme: "light" | "dark", token: string) {
  const block = getThemeBlock(theme);
  const tokenPattern = new RegExp(`${token}:\\s*([^;]+);`);
  const match = block.match(tokenPattern);
  return match?.[1]?.trim() ?? "";
}

function mockMatchMedia(prefersDark: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: prefersDark && query === "(prefers-color-scheme: dark)",
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe("LandingPage theme toggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    mockMatchMedia(false);
  });

  it("renders an accessible toggle and flips aria-pressed + dataset theme on click", async () => {
    const user = userEvent.setup();
    renderWithThemeProvider();

    const toggle = screen.getByRole("button", { name: /theme toggle/i });

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
      expect(toggle).toHaveAttribute("aria-pressed", "true");
    });

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("exposes distinct root theme tokens for light and dark modes", () => {
    renderWithThemeProvider();
    const lightSurfacePage = getThemeTokenValue("light", "--pc-surface-page");
    const lightTextPrimary = getThemeTokenValue("light", "--pc-text-primary");

    const darkSurfacePage = getThemeTokenValue("dark", "--pc-surface-page");
    const darkTextPrimary = getThemeTokenValue("dark", "--pc-text-primary");

    expect(lightSurfacePage).not.toBe("");
    expect(darkSurfacePage).not.toBe("");
    expect(lightTextPrimary).not.toBe("");
    expect(darkTextPrimary).not.toBe("");
    expect(lightSurfacePage).not.toBe(darkSurfacePage);
    expect(lightTextPrimary).not.toBe(darkTextPrimary);
  });

  it("shows About us in the landing header navigation", async () => {
    renderWithThemeProvider();

    await waitFor(() => {
      expect(screen.getByRole("link", { name: /about us/i })).toHaveAttribute("href", "/about");
    });
  });
});
