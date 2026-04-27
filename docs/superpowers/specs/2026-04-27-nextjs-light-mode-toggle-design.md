# Next.js Light Mode Toggle Design Spec

Date: 2026-04-27
Status: Approved in chat (Approach 1 selected)

## 1) Objective

Add a production-ready theme toggle to the existing Next.js landing app so users can switch between dark and light mode, with:
- preference persistence in localStorage
- system-theme default on first visit
- full-page light rendering aligned with newly created light component variants from the design work

The implementation must preserve current dark mode behavior and existing component APIs where possible.

## 2) Selected Approach

Selected approach: CSS variable theming + React theme context.

Why this approach:
- avoids maintaining duplicate page trees
- keeps theme logic centralized and extensible
- enables global styling parity without rewriting every JSX path
- supports long-term expansion to additional pages/features

## 3) Scope

In scope:
- create a theme provider and hook (`light` / `dark`)
- persist user choice to localStorage
- initialize theme from system preference on first visit
- apply global theme via `data-theme` on `document.documentElement`
- add a visible, accessible toggle to the existing landing header
- map existing styles to semantic theme variables in `globals.css`
- ensure the landing page can render with light-mode palette consistent with the new component system

Out of scope:
- multi-theme beyond light/dark
- backend persistence of theme
- redesigning page information architecture
- unrelated visual refactors not required for parity

## 4) Architecture

### 4.1 Theme state

Theme state will live in a top-level provider used by `_app.tsx`.

State model:
- `theme: "light" | "dark"`
- `setTheme(theme)`
- `toggleTheme()`

Storage key:
- `agentspod-theme`

### 4.2 Initialization sequence

On client mount:
1. Read localStorage key.
2. If key exists and is valid (`light`/`dark`), use it.
3. Else read `matchMedia("(prefers-color-scheme: dark)")`.
4. Set `document.documentElement.dataset.theme`.

On user toggle:
1. Update provider state.
2. Persist localStorage value.
3. Update root dataset attribute.

### 4.3 Rendering strategy

Keep current `LandingPage` structure and `PencilComponentLibrary` function signatures stable.

Theme-specific rendering is achieved by:
- global semantic CSS variables
- component/class rules consuming variables instead of hardcoded values
- minimal JSX changes limited to the toggle UI and optional helper class hooks

## 5) Component and File Design

## 5.1 New files

- `components/theme/ThemeProvider.tsx`
  - provider + context + internal initialization logic
- `components/theme/useTheme.ts` (or re-export from provider module)
  - consumer hook for current theme and toggle

## 5.2 Modified files

- `pages/_app.tsx`
  - wrap app in `ThemeProvider`
- `components/landing/LandingPage.tsx`
  - add toggle control in header area
  - bind label/icon to active theme
  - include accessibility attributes (`aria-label`, `aria-pressed`)
- `styles/globals.css`
  - introduce semantic token variables for both themes
  - swap key `pc-*` hardcoded color usages to variables
- `components/landing/PencilComponentLibrary.tsx`
  - keep API stable; ensure visual styles remain theme-responsive through CSS classes/tokens

## 6) Styling System

Use semantic variables (example set):
- `--pc-surface-page`
- `--pc-surface-card`
- `--pc-surface-elevated`
- `--pc-text-primary`
- `--pc-text-muted`
- `--pc-text-soft`
- `--pc-border-subtle`
- `--pc-border-strong`
- `--pc-accent-primary`
- `--pc-accent-secondary`
- `--pc-focus-ring`

Theme blocks:
- `:root, [data-theme="dark"]` -> existing dark values
- `[data-theme="light"]` -> values mapped from new light component design language

Important rule:
- no direct hardcoded theme colors in component rules unless visually required and documented

## 7) Accessibility and UX Requirements

- Toggle is keyboard accessible and operable via Enter/Space.
- Toggle communicates state with `aria-pressed`.
- Toggle text/icon clearly indicates current mode and action.
- Focus ring remains visible in both themes.
- Contrast targets:
  - body text >= 4.5:1
  - large text/buttons >= 3:1

## 8) Error Handling and Edge Cases

- If localStorage is unavailable, app continues with in-memory theme and system default.
- If stored value is invalid, ignore and fallback to system preference.
- SSR safety:
  - guard all browser APIs (`window`, `document`, `matchMedia`, `localStorage`)
- Hydration safety:
  - default deterministic initial theme value, then reconcile in effect

## 9) Testing Strategy

### 9.1 Unit tests

Theme provider tests:
- initializes from localStorage when present
- falls back to system preference when key missing
- writes to localStorage on toggle
- applies root `data-theme` correctly

### 9.2 Component tests

Landing toggle tests:
- toggle renders in header
- `aria-pressed` flips on click
- expected label/icon changes by state

### 9.3 Manual verification

- dark default behavior preserved
- light mode visually coherent across major sections
- refresh retains selected mode
- first-visit behavior tracks OS preference
- no layout regressions in nav/hero/footer

## 10) Acceptance Criteria

- User can toggle dark/light from landing header.
- Selected mode persists across refresh.
- First visit defaults to system theme.
- Root `data-theme` updates reliably to active mode.
- Landing page visuals in light mode are production-usable and consistent with new light component direction.
- Dark mode remains functionally and visually stable.

## 11) Risks and Mitigations

Risk: hydration mismatch flicker.
- Mitigation: client-side guarded initialization and controlled default.

Risk: partial migration leaves mixed hardcoded colors.
- Mitigation: convert all critical color-bearing `pc-*` rules to semantic variables in one pass.

Risk: toggle placement causes header crowding on small widths.
- Mitigation: responsive placement and fallback compact label/icon mode at narrow breakpoints.

## 12) Implementation Notes

- Keep landing content and structure unchanged unless required for theme parity.
- Favor additive, low-risk changes over large refactors.
- Ensure code remains compatible with current `pages` router setup.
