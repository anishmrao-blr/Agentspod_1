# Next.js Light Mode Toggle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a persistent dark/light theme toggle to the existing landing page, defaulting to system preference on first visit, and render the page with the new light-mode styling system.

**Architecture:** Introduce a small React theme context at app root, persist preference in localStorage, and drive all visuals through CSS custom properties controlled by `data-theme` on the root element. Keep current landing component APIs stable and make styles theme-responsive.

**Tech Stack:** Next.js (pages router), React, TypeScript, CSS, Vitest + Testing Library (added in this plan)

---

## File Structure

### Create
- `components/theme/ThemeProvider.tsx` — theme context/provider, localStorage + system preference init, root dataset sync
- `components/theme/useTheme.ts` — typed consumer hook
- `tests/theme/theme-provider.test.tsx` — provider behavior tests (storage/system/toggle)
- `tests/landing/theme-toggle.test.tsx` — landing toggle behavior/accessibility tests
- `vitest.config.ts` — Vitest + jsdom config
- `tests/setup.ts` — Testing Library setup and matchMedia/localStorage helpers

### Modify
- `package.json` — add test dependencies + scripts
- `pages/_app.tsx` — wrap app with provider
- `components/landing/LandingPage.tsx` — add toggle control to header
- `styles/globals.css` — add dark/light semantic tokens and migrate hardcoded colors to variables
- `components/landing/PencilComponentLibrary.tsx` — keep API unchanged; ensure class usage remains compatible with tokenized styles

---

### Task 1: Add Test Tooling (TDD foundation)

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`

- [ ] **Step 1: Write the failing "test command exists" check**

Add this temporary script test in `package.json` to force a fail until real test scripts are added:

```json
{
  "scripts": {
    "test:theme:check": "node -e \"process.exit(process.env.npm_lifecycle_event==='test'?0:1)\""
  }
}
```

- [ ] **Step 2: Run to verify failure**

Run: `npm run test`

Expected: FAIL because `test` script is missing.

- [ ] **Step 3: Minimal implementation**

Update `package.json` scripts and add dependencies:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "devDependencies": {
    "vitest": "latest",
    "@testing-library/react": "latest",
    "@testing-library/jest-dom": "latest",
    "@testing-library/user-event": "latest",
    "jsdom": "latest"
  }
}
```

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    globals: true
  }
});
```

Create `tests/setup.ts`:

```ts
import "@testing-library/jest-dom";
```

- [ ] **Step 4: Run to verify pass**

Run: `npm install && npm run test`

Expected: PASS with "No test files found" (exit code 0 for configured runner).

- [ ] **Step 5: Commit**

```bash
git add package.json vitest.config.ts tests/setup.ts
git commit -m "chore: add vitest testing setup for theme work"
```

---

### Task 2: Build ThemeProvider with localStorage + system default

**Files:**
- Create: `components/theme/ThemeProvider.tsx`
- Create: `components/theme/useTheme.ts`
- Test: `tests/theme/theme-provider.test.tsx`

- [ ] **Step 1: Write failing test for localStorage preference**

Create `tests/theme/theme-provider.test.tsx` with:

```ts
import { render, screen } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../../components/theme/ThemeProvider";
import { beforeEach, describe, expect, it } from "vitest";

function Probe() {
  const { theme } = useTheme();
  return <div data-testid="theme">{theme}</div>;
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("uses stored theme when available", async () => {
    localStorage.setItem("agentspod-theme", "light");
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme")).toHaveTextContent("light");
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- tests/theme/theme-provider.test.tsx`

Expected: FAIL with missing module/provider/hook.

- [ ] **Step 3: Write minimal implementation**

Create `components/theme/ThemeProvider.tsx`:

```tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; setTheme: (t: Theme) => void; toggleTheme: () => void };

const STORAGE_KEY = "agentspod-theme";
const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): Theme {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === "light" || raw === "dark") return raw;
  return getSystemTheme();
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const initial = readInitialTheme();
    setThemeState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.dataset.theme = theme;
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (t: Theme) => setThemeState(t),
      toggleTheme: () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
```

Create `components/theme/useTheme.ts`:

```ts
export { useTheme } from "./ThemeProvider";
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test -- tests/theme/theme-provider.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/theme/ThemeProvider.tsx components/theme/useTheme.ts tests/theme/theme-provider.test.tsx
git commit -m "feat: add theme provider with persisted preference"
```

---

### Task 3: Add app wiring and header toggle

**Files:**
- Modify: `pages/_app.tsx`
- Modify: `components/landing/LandingPage.tsx`
- Test: `tests/landing/theme-toggle.test.tsx`

- [ ] **Step 1: Write failing toggle test**

Create `tests/landing/theme-toggle.test.tsx`:

```ts
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../../components/theme/ThemeProvider";
import { LandingPage } from "../../components/landing/LandingPage";
import { describe, expect, it } from "vitest";

describe("Landing theme toggle", () => {
  it("toggles aria-pressed and root data-theme", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    );

    const toggle = screen.getByRole("button", { name: /theme toggle/i });
    const before = toggle.getAttribute("aria-pressed");
    await user.click(toggle);
    const after = toggle.getAttribute("aria-pressed");

    expect(before).not.toEqual(after);
    expect(document.documentElement.dataset.theme).toMatch(/light|dark/);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test -- tests/landing/theme-toggle.test.tsx`

Expected: FAIL because toggle is not present.

- [ ] **Step 3: Minimal implementation**

Update `pages/_app.tsx`:

```tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

Update `components/landing/LandingPage.tsx`:

```tsx
import { useTheme } from "../theme/useTheme";
// ...
const { theme, toggleTheme } = useTheme();
// in header cta area:
<button
  type="button"
  className="pc-theme-toggle"
  aria-label="Theme toggle"
  aria-pressed={theme === "light"}
  onClick={toggleTheme}
>
  {theme === "light" ? "Light" : "Dark"}
</button>
```

- [ ] **Step 4: Run tests to verify pass**

Run: `npm run test -- tests/theme/theme-provider.test.tsx tests/landing/theme-toggle.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add pages/_app.tsx components/landing/LandingPage.tsx tests/landing/theme-toggle.test.tsx
git commit -m "feat: wire theme provider and add landing toggle"
```

---

### Task 4: Tokenize global styles for dark/light parity

**Files:**
- Modify: `styles/globals.css`
- Modify (if required): `components/landing/PencilComponentLibrary.tsx`

- [ ] **Step 1: Write failing style assertion test**

Add an assertion in `tests/landing/theme-toggle.test.tsx`:

```ts
it("exposes root theme tokens for light mode", async () => {
  render(
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
  document.documentElement.dataset.theme = "light";
  const styles = getComputedStyle(document.documentElement);
  expect(styles.getPropertyValue("--pc-surface-page").trim()).not.toBe("");
});
```

- [ ] **Step 2: Run test to verify failure**

Run: `npm run test -- tests/landing/theme-toggle.test.tsx`

Expected: FAIL because token is undefined.

- [ ] **Step 3: Minimal implementation**

In `styles/globals.css` define tokens:

```css
:root,
[data-theme="dark"] {
  --pc-surface-page: #000000;
  --pc-surface-card: #0b0e14;
  --pc-text-primary: #f0f0f0;
  --pc-text-muted: #a1a4a5;
  --pc-border-subtle: #d6ebfd30;
  --pc-accent-primary: #ffffff;
}

[data-theme="light"] {
  --pc-surface-page: #f7faff;
  --pc-surface-card: #ffffff;
  --pc-text-primary: #111827;
  --pc-text-muted: #4b5563;
  --pc-border-subtle: #d9e2ef;
  --pc-accent-primary: #0a66ff;
}
```

Replace key hardcoded `pc-*` color rules to use these variables (page bg, text, cards, borders, buttons, footer blocks).

- [ ] **Step 4: Run tests + lint**

Run: `npm run test && npm run lint`

Expected: PASS for both.

- [ ] **Step 5: Commit**

```bash
git add styles/globals.css components/landing/PencilComponentLibrary.tsx tests/landing/theme-toggle.test.tsx
git commit -m "feat: add semantic theme tokens and light mode styles"
```

---

### Task 5: Final verification and cleanup

**Files:**
- Modify: `components/theme/ThemeProvider.tsx` (only if needed)
- Modify: `components/landing/LandingPage.tsx` (only if needed)

- [ ] **Step 1: Write failing regression test for persisted toggle**

Add to `tests/theme/theme-provider.test.tsx`:

```ts
it("persists toggled value to localStorage", async () => {
  // render + click toggle via probe component exposing toggle action
  // assert localStorage has updated theme key
});
```

- [ ] **Step 2: Run to verify failure**

Run: `npm run test -- tests/theme/theme-provider.test.tsx`

Expected: FAIL until toggle persistence assertion is implemented correctly.

- [ ] **Step 3: Minimal implementation**

Adjust provider side-effect timing/assertion helpers only if needed to satisfy persistence deterministically.

- [ ] **Step 4: Full project verification**

Run:
- `npm run test`
- `npm run lint`
- `npm run build`

Expected:
- all PASS
- no new warnings/errors

- [ ] **Step 5: Commit**

```bash
git add components/theme/ThemeProvider.tsx components/landing/LandingPage.tsx tests/theme/theme-provider.test.tsx
git commit -m "test: add persistence regression coverage and finalize theme toggle"
```

---

## Notes

- Keep `LandingPage` copy/content unchanged unless required for theme readability.
- Do not duplicate page components into separate light/dark versions.
- Keep theme logic isolated in `components/theme/*`.

