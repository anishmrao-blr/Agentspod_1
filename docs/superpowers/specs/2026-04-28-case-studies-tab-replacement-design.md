# Case Studies Tab Replacement Design

**Date:** 2026-04-28  
**Scope:** Replace `Projects` tab and page content with `Case Studies` in existing Next.js landing/internal page experience.

## Goal

Replace all user-facing `Projects` navigation and page content with a category-driven `Case Studies` experience, leveraging curated content from `stellarmind_full_sitemap_scrape.md`, while reusing the current React component library and existing internal-page rendering patterns.

## Context and Constraints

- Existing navigation and internal pages are driven by:
  - `components/landing/LandingPage.tsx`
  - `components/landing/internalPages.ts`
- Existing route compatibility should be preserved (Option A selected): keep the same route behavior and replace visible labels/content.
- Existing component library should be reused (`ComponentCardFeature`, typography and nav link components in `components/landing/PencilComponentLibrary.tsx`).
- Content source: `stellarmind_full_sitemap_scrape.md`.
- User requested category-based case studies.

## Information Architecture

The replaced page (currently `projects`) will become a `Case Studies` page organized into four categories:

1. **Voice AI & Conversational Systems**
2. **Computer Vision & Inspection**
3. **IoT & Edge Intelligence**
4. **Compliance & Enterprise AI**

Each category is represented by one or more capability cards with:
- `title`: case study title
- `body`: concise business-outcome summary
- `details`: key deliverables and implementation highlights
- `learnMoreHref` (when available): source URL for deeper reference

## Content Mapping Strategy

Content is sourced and normalized from `stellarmind_full_sitemap_scrape.md`, prioritizing entries with:
- clear project title
- actionable summary sentence(s)
- domain/stack signals (AI, IoT, CV, compliance)

Canonical case studies selected for first version:
- SERYNA - Emotionally Intelligent Voice AI Companion
- Vakta.tech - Voice-Enabled AI Agents
- AI-Powered Gameplay Analysis System
- AI-Powered Car Dent Detection & Pre-Inspection System
- AI Medical Waste Monitoring System
- AI-Powered IoT for Smarter Home Automation (AIVA)
- IoT-Based Cost-Effective Electricity Generation and Monitoring
- Automated SOC 2 Audit Review with Mistral AI

## UX and Copy Changes

### Header navigation

- Replace visible label `Projects` with `Case Studies`.
- Keep the target path aligned with existing internal-page pattern (`/projects`) to avoid routing breakage.

### Footer company links

- Replace visible label `Projects` with `Case Studies` while preserving link compatibility.

### Internal page content

For the existing `projects` page object in `internalPages.ts`:
- `title` -> `Case Studies | Agentspod.AI`
- `description` -> case-study-focused meta description
- `heroHeading` -> `Case Studies`
- `heroBody` -> business-value-oriented intro
- `highlights` -> category names / value propositions
- `capabilitiesSectionTitle` -> `Case Study Categories`
- `capabilities` -> category-grouped project cards
- `closingHeading` / `closingBody` -> CTA for discussing similar builds

## Data Flow

No new backend data source is introduced in this iteration.

Data flow remains static and code-local:
1. `internalPages.ts` exports updated `projects` entry.
2. Existing page renderer consumes this object.
3. Existing card components render updated case-study content.

This keeps implementation low-risk and consistent with current architecture.

## Error Handling and Edge Cases

- Broken external links: only use known-good `stellarmind.ai` links included in source file; omit `learnMoreHref` if uncertain.
- Content volume overflow: cap each card body to concise summary; place detailed text in `details`.
- Naming consistency: use `Case Studies` as the canonical label across nav, footer, and page copy.

## Testing Strategy

1. Unit/UI tests (where existing coverage patterns allow):
   - Verify header renders `Case Studies` and no longer renders `Projects`.
   - Verify internal page data for `projects` contains case-study hero/copy.
2. Run targeted test suite:
   - landing/theme related tests to ensure no regressions in shared components.
3. Lint check on edited files.
4. Manual sanity check:
   - Navigate to the replaced tab and confirm category-based cards render correctly.

## Out of Scope

- Creating a brand-new `/case-studies` route.
- CMS-backed case-study data ingestion.
- Dynamic filtering UI/tabs inside case studies.
- Deep redesign of existing internal-page renderer.

## Rollout Notes

- This is a content and IA replacement over existing structure.
- Existing links pointing to `/projects` continue to work, now showing case-study content.
