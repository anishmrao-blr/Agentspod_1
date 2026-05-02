## Project Overview
- Workspace includes design and export assets for `agentspod-ai`.
- Pencil MCP is used for `.pen` page composition and visual iteration.

## Architecture Notes
- Landing pages are built as a single top-level frame with vertical section stacking.
- Global design tokens are defined via Pencil variables (`surface.*`, `foreground.*`, `accent.*`, spacing/radius/text scales).
- Next.js routing is currently under `pages/` with shared layout behavior from `pages/_app.tsx`.
- Internal service/legal/company pages now use a shared React template component (`components/landing/InternalContentPage.tsx`) plus typed route content config (`components/landing/internalPages.ts`).
- Shared sticky header + mobile nav chrome lives in `components/landing/SiteHeader.tsx`; `InternalContentPage` composes it by default. Pages that need custom layout order (e.g. `pages/projects.tsx` featured cards above the filter grid) pass `embedded` to `InternalContentPage` and render `SiteHeader` once inside the same `main.pc-page`.

## Patterns
- Use `placeholder: true` during frame construction and unset after completion.
- Build in section batches with `batch_design` (hero, trust, features, media, proof, CTA, footer).
- Validate with `snapshot_layout` for structure and `get_screenshot` for visual QA.
- For exact Figma web replicas, use Figma MCP `get_design_context` on the target frame and apply the generated layer tree directly into `app/page.tsx`.
- Keep `app/layout.tsx` and `app/globals.css` minimal when importing absolute-positioned Figma output to avoid style drift.
- For multi-page marketing mirrors, store scraped source copy in `docs/references/*` and feed route content via typed page config so each `pages/*.tsx` file stays minimal.
- `.pc-card-grid` uses `align-items: start` so expandable case-study cards do not stretch to the tallest card in the same row (grid default `stretch` caused that). Case study `details` strings in `internalPages.ts` were normalized from UTF-8 mojibake (`â€¢` → `•`, em dash, arrow in comments) for clean rendering.

## User Defined Namespaces
- [Leave blank - user populates]
