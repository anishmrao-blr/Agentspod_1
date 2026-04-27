## Project Overview
- Workspace includes design and export assets for `agentspod-ai`.
- Pencil MCP is used for `.pen` page composition and visual iteration.

## Architecture Notes
- Landing pages are built as a single top-level frame with vertical section stacking.
- Global design tokens are defined via Pencil variables (`surface.*`, `foreground.*`, `accent.*`, spacing/radius/text scales).

## Patterns
- Use `placeholder: true` during frame construction and unset after completion.
- Build in section batches with `batch_design` (hero, trust, features, media, proof, CTA, footer).
- Validate with `snapshot_layout` for structure and `get_screenshot` for visual QA.
- For exact Figma web replicas, use Figma MCP `get_design_context` on the target frame and apply the generated layer tree directly into `app/page.tsx`.
- Keep `app/layout.tsx` and `app/globals.css` minimal when importing absolute-positioned Figma output to avoid style drift.

## User Defined Namespaces
- [Leave blank - user populates]
