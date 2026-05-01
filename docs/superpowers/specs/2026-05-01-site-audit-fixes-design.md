# Site Audit Fixes — Design Spec

## Goal
Three surgical fixes to address issues flagged during a post-overhaul site audit: remove white-label link exposure, strip capability cards from legal pages, and align the About page with the rest of the site.

## Issue 1 — StellarMind learnMoreHref cleanup

**File:** `components/landing/internalPages.ts`

All `learnMoreHref` values in `capabilityGroups` items that point to `https://stellarmind.ai/case-studies/...` are replaced with `/contact`. These links are currently dormant (ExpandableCardFeature does not render them), but exist as live data that would expose the white-label relationship if rendering ever changes. No visual change on the site.

## Issue 2 — Remove capability cards from Privacy & Terms pages

**File:** `components/landing/InternalContentPage.tsx`

Add a `hideCapabilities` boolean derived from `page.slug`:
```ts
const hideCapabilities = page.slug === "privacy" || page.slug === "terms";
```
The middle `<section>` (capabilities heading + card grid) is wrapped in `{!hideCapabilities ? (...) : null}`. Hero section and closing CTA section are untouched. No new component, no props change.

## Issue 3 — About page alignment

**File:** `pages/about.tsx`

Three in-place text fixes:
1. `<title>About Us | Agendspod.AI</title>` → `About Us | Agentspod.AI`
2. `CALENDAR_LINK = "https://cal.com/sevesenseai/30min"` → `"https://cal.com/swami-tpxjxh"`
3. `BOOK A MEET →` button text → `Book a meet →`

## Out of scope
- Extracting a shared `<SiteHeader />` component (unrelated refactor)
- Adding images to Privacy/Terms cards (cards are being removed)
- Any changes to page layout or content
