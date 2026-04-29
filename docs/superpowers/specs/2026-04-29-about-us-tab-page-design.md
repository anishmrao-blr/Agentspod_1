# About Us Tab and Page Design

**Date:** 2026-04-29  
**Scope:** Add `About us` in top navigation on landing and create a dedicated `/about` page with narrative-first information architecture and blended voice.

## Goal

Introduce a dedicated `About us` destination that improves trust, conversion readiness, and brand clarity, while staying consistent with the existing Agentspod landing visual system and component patterns.

## Context and Constraints

- Existing entry page and shell:
  - `pages/index.tsx`
  - `components/landing/LandingPage.tsx`
- Existing style/component system should be reused:
  - `components/landing/PencilComponentLibrary.tsx`
  - shared `pc-*` utility classes and section rhythm from current landing styles
- Current navigation includes `Services`, `Case Studies`, `Careers`, `Contact`; `About us` should be added without breaking existing links.
- User-selected direction:
  - Primary goal: balanced trust + conversion + hiring signal
  - IA style: narrative-first
  - Tone: blended (professional + human + technical)

## Chosen Approach

### Option Selected: Dedicated `/about` page with shared visual patterns

- Add `About us` tab to landing header nav.
- Create standalone route `pages/about.tsx`.
- Implement page with narrative-first section flow.
- Keep content static in code for iteration speed and editorial control in V1.

This gives clear information architecture, avoids homepage overcrowding, and supports future growth (team section, values, timeline, CMS migration) without reworking the landing core.

## Information Architecture

The `About us` page follows this sequence:

1. **Hero** — Positioning statement and action CTAs
2. **Who We Are** — Story and operating identity
3. **How We Work** — Four-step delivery model
4. **Why Teams Choose Us** — Trust and proof pillars
5. **Final CTA** — Conversion-focused close

## Content Model (V1 Static)

Define local constants for content blocks in `pages/about.tsx` (or extracted local module if file grows):

- `hero`: `title`, `body`, `primaryCta`, `secondaryCta`
- `whoWeAre`: `heading`, `paragraph`, `pillars[]`
- `howWeWorkSteps[]`: `title`, `description`, optional `outcome`
- `whyChooseUs[]`: `title`, `description`
- `closing`: `heading`, `body`, `primaryCta`, `secondaryCta`

Copy principles:

- Keep headings concise and confidence-led.
- Use outcome-oriented microcopy in process steps.
- Avoid inflated marketing jargon; prefer specific, plain language.
- Keep CTA verbs action-first (`Book a strategy call`, `Tell us your use case`).

## UX and Visual Behavior

- Reuse existing typography and spacing rhythm from landing (`pc-wrap`, `pc-section`, button variants).
- Preserve framer-motion behavior consistency:
  - section reveal on scroll
  - reduced-motion respectful behavior
- Ensure header nav style remains unchanged except added `About us` item.
- Maintain contrast and readability parity with existing dark theme experience.

## Routing and Navigation Behavior

### Header Nav

- In `LandingPage` header nav, insert `About us` link pointing to `/about`.
- Placement: between `Case Studies` and `Careers` (recommended for company-level discovery).

### Page Route

- Add `pages/about.tsx` exporting Next page component with proper `<Head>` metadata.
- Suggested metadata:
  - title: `About Us | Agendspod.AI`
  - description: concise trust statement aligned with services and delivery model

## Component Architecture

Keep implementation simple and aligned with current codebase patterns:

- Use existing component primitives from `PencilComponentLibrary` where suitable (headings, body text, buttons/chips/cards).
- If a process-step card variant is needed, create a lightweight local section component in `pages/about.tsx` first.
- Extract to `components/about/*` only if complexity exceeds a single-page threshold.

## Data Flow

No backend/CMS integration in V1.

Data remains static and page-local:

1. User clicks `About us` in landing nav.
2. Next.js routes to `/about`.
3. Page renders static structured sections.
4. CTA links route to `/contact` or meeting URL.

This keeps the change low-risk and highly editable.

## Error Handling and Edge Cases

- Missing assets: V1 should avoid hard dependency on new media files; use text-first layout.
- Long copy overflow: constrain section widths and keep paragraph lengths controlled.
- Mobile nav crowding: verify `About us` addition does not wrap or break header actions on common breakpoints.
- Accessibility:
  - one H1 only
  - logical heading hierarchy
  - clear link/button labels

## Testing Strategy

1. **Navigation regression checks**
   - Landing header renders `About us` link.
   - Existing nav links remain intact (`Services`, `Case Studies`, `Careers`, `Contact`).
2. **Route rendering checks**
   - `/about` returns 200 and renders core headings.
3. **Content presence checks**
   - Verify all five IA sections render expected headings.
4. **Lint/type checks**
   - Run targeted lint/type validation for edited files.
5. **Manual responsive checks**
   - Validate header and about sections on desktop/tablet/mobile widths.

## Out of Scope

- CMS-managed About page content in this iteration.
- Team-member dynamic profiles.
- Timeline/history interactive module.
- Multi-language localization.
- Full-site nav refactor.

## Rollout Notes

- This is an additive IA update with minimal risk.
- Existing pages remain unchanged except header includes one extra nav item.
- V2 can migrate static content to Directus once copy stabilizes.
