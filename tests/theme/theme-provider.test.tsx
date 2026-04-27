import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { useTheme } from "@/components/theme/useTheme";

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button type="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
}

function renderWithProvider(children: ReactNode = <ThemeConsumer />) {
  return render(<ThemeProvider>{children}</ThemeProvider>);
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

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    mockMatchMedia(false);
  });

  it("uses stored theme when localStorage has valid value", () => {
    localStorage.setItem("agentspod-theme", "dark");
    mockMatchMedia(false);

    renderWithProvider();

    return waitFor(() => {
      expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
  });

  it("falls back to system preference when storage missing", () => {
    mockMatchMedia(true);

    renderWithProvider();

    return waitFor(() => {
      expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
  });

  it("falls back to system preference when storage value is invalid", () => {
    localStorage.setItem("agentspod-theme", "invalid-theme-value");
    mockMatchMedia(true);

    renderWithProvider();

    return waitFor(() => {
      expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
  });

  it("toggling updates root data-theme", async () => {
    const user = userEvent.setup();
    mockMatchMedia(false);
    renderWithProvider();

    expect(document.documentElement.dataset.theme).toBe("light");

    await user.click(screen.getByRole("button", { name: "toggle" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("toggling persists to localStorage key agentspod-theme", async () => {
    const user = userEvent.setup();
    mockMatchMedia(false);
    renderWithProvider();

    await user.click(screen.getByRole("button", { name: "toggle" }));

    expect(localStorage.getItem("agentspod-theme")).toBe("dark");
  });

  it("throws when useTheme is called outside provider", () => {
    function OutsideProviderConsumer() {
      useTheme();
      return null;
    }

    expect(() => render(<OutsideProviderConsumer />)).toThrow(
      "useTheme must be used within ThemeProvider"
    );
  });
});
