# About Us Tab and Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an `About us` navigation tab on the landing header and ship a new `/about` page that follows the approved narrative-first structure and blended tone.

**Architecture:** Keep V1 simple and static: add the route at `pages/about.tsx`, render structured section content with existing landing visual patterns, and update header navigation in `LandingPage`. Cover behavior with focused Vitest + Testing Library tests and keep motion/theme behavior consistent with existing implementation.

**Tech Stack:** Next.js pages router, React 19, TypeScript, Framer Motion, Testing Library, Vitest, ESLint

---

## File Structure and Responsibilities

- **Create** `pages/about.tsx`
  - Owns `/about` route, page `<Head>` metadata, and narrative-first section rendering.
- **Create** `tests/landing/about-page.test.tsx`
  - Verifies `/about` page section headings and CTA links render correctly.
- **Modify** `components/landing/LandingPage.tsx`
  - Adds `About us` entry to header nav between `Case Studies` and `Careers`.
- **Modify** `tests/landing/theme-toggle.test.tsx`
  - Adds a regression assertion that `LandingPage` header includes `About us` link.

---

### Task 1: Add failing tests for About page and nav regression

**Files:**
- Create: `tests/landing/about-page.test.tsx`
- Modify: `tests/landing/theme-toggle.test.tsx`
- Test: `tests/landing/about-page.test.tsx`, `tests/landing/theme-toggle.test.tsx`

- [ ] **Step 1: Write the failing About page test**

```tsx
import { render, screen } from "@testing-library/react";
import AboutPage from "@/pages/about";
import "@/styles/globals.css";

describe("About page", () => {
  it("renders approved narrative sections and CTAs", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { name: /engineering intelligence, human partnership/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /who we are/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how we work/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /why teams choose us/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /book a strategy call/i })).toHaveAttribute("href");
    expect(screen.getByRole("link", { name: /see case studies/i })).toHaveAttribute("href", "/projects");
  });
});
```

- [ ] **Step 2: Write the failing nav regression test**

```tsx
it("shows About us in the landing header navigation", async () => {
  renderWithThemeProvider();

  await waitFor(() => {
    expect(screen.getByRole("link", { name: "About us" })).toHaveAttribute("href", "/about");
  });
});
```

- [ ] **Step 3: Run tests to verify failure**

Run:
```bash
npm run test -- tests/landing/about-page.test.tsx tests/landing/theme-toggle.test.tsx
```

Expected:
- `tests/landing/about-page.test.tsx` fails with module/file-not-found for `@/pages/about` (or missing expected headings).
- Nav assertion fails because `About us` link does not yet exist.

- [ ] **Step 4: Commit failing tests**

```bash
git add tests/landing/about-page.test.tsx tests/landing/theme-toggle.test.tsx
git commit -m "test: add coverage for about page and landing about nav link"
```

---

### Task 2: Implement `/about` page with narrative-first content

**Files:**
- Create: `pages/about.tsx`
- Test: `tests/landing/about-page.test.tsx`

- [ ] **Step 1: Implement page metadata and approved IA sections**

```tsx
import Head from "next/head";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import {
  ComponentTextBodyLarge,
  ComponentTextBodySmall,
  ComponentTextH1Hero,
  ComponentTextH2Section
} from "@/components/landing/PencilComponentLibrary";

const meetingUrl = "https://cal.com/swami-tpxjxh";

export default function AboutPage() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <>
      <Head>
        <title>About Us | Agendspod.AI</title>
        <meta
          name="description"
          content="Learn how Agendspod.AI partners with founders and enterprises through a clear, outcome-driven AI delivery process."
        />
      </Head>

      <LazyMotion features={domAnimation}>
        <m.main className="pc-page">
          <section className="pc-wrap pc-section" aria-labelledby="about-hero-heading">
            <ComponentTextH1Hero id="about-hero-heading">
              ENGINEERING INTELLIGENCE, HUMAN PARTNERSHIP.
            </ComponentTextH1Hero>
            <ComponentTextBodyLarge>
              We partner with ambitious teams to design, build, and scale AI systems that create measurable business outcomes.
            </ComponentTextBodyLarge>
            <div className="pc-hero-ctas">
              <a className="pc-btn pc-btn-primary-hero pc-btn-anchor" href={meetingUrl} target="_blank" rel="noopener noreferrer">
                Book a strategy call
              </a>
              <a className="pc-btn pc-btn-ghost-hero pc-btn-anchor" href="/projects">
                See case studies
              </a>
            </div>
          </section>

          <section className="pc-wrap pc-section" aria-labelledby="who-we-are-heading">
            <ComponentTextH2Section id="who-we-are-heading">Who We Are</ComponentTextH2Section>
            <ComponentTextBodyLarge>
              We are engineers, product thinkers, and AI practitioners who own delivery end-to-end—from architecture decisions to production outcomes.
            </ComponentTextBodyLarge>
          </section>

          <section className="pc-wrap pc-section" aria-labelledby="how-we-work-heading">
            <ComponentTextH2Section id="how-we-work-heading">How We Work</ComponentTextH2Section>
            <ComponentTextBodySmall>Discover · Design · Build · Scale</ComponentTextBodySmall>
          </section>

          <section className="pc-wrap pc-section" aria-labelledby="why-us-heading">
            <ComponentTextH2Section id="why-us-heading">Why Teams Choose Us</ComponentTextH2Section>
            <ComponentTextBodyLarge>
              Fast execution, deep technical ownership, and product-minded collaboration from kickoff to production.
            </ComponentTextBodyLarge>
          </section>
        </m.main>
      </LazyMotion>
    </>
  );
}
```

- [ ] **Step 2: Run About page test to verify pass**

Run:
```bash
npm run test -- tests/landing/about-page.test.tsx
```

Expected:
- PASS for section headings and CTA link assertions.

- [ ] **Step 3: Commit About page implementation**

```bash
git add pages/about.tsx
git commit -m "feat: add narrative-first about us page"
```

---

### Task 3: Add `About us` link in landing header navigation

**Files:**
- Modify: `components/landing/LandingPage.tsx`
- Test: `tests/landing/theme-toggle.test.tsx`

- [ ] **Step 1: Insert nav link between Case Studies and Careers**

```tsx
<ComponentNavMenuItemLink href={`${ORIGIN}/projects`}>
  Case Studies
</ComponentNavMenuItemLink>
<ComponentNavMenuItemLink href={`${ORIGIN}/about`}>
  About us
</ComponentNavMenuItemLink>
<ComponentNavMenuItemLink href={`${ORIGIN}/careers`}>
  Careers
</ComponentNavMenuItemLink>
```

- [ ] **Step 2: Run nav regression test**

Run:
```bash
npm run test -- tests/landing/theme-toggle.test.tsx
```

Expected:
- PASS with `About us` link assertion and existing theme-toggle tests still green.

- [ ] **Step 3: Commit nav update**

```bash
git add components/landing/LandingPage.tsx tests/landing/theme-toggle.test.tsx
git commit -m "feat: add about us link to landing header navigation"
```

---

### Task 4: Verify integrated behavior and quality gates

**Files:**
- Test: `tests/landing/about-page.test.tsx`, `tests/landing/theme-toggle.test.tsx`, `tests/landing/internal-pages.test.tsx`
- Validate: `pages/about.tsx`, `components/landing/LandingPage.tsx`

- [ ] **Step 1: Run targeted landing test suite**

Run:
```bash
npm run test -- tests/landing/about-page.test.tsx tests/landing/theme-toggle.test.tsx tests/landing/internal-pages.test.tsx
```

Expected:
- PASS for all targeted landing-related tests.

- [ ] **Step 2: Run lint on touched files**

Run:
```bash
npm run lint
```

Expected:
- PASS with zero warnings/errors.

- [ ] **Step 3: Manual verification in dev server**

Run:
```bash
npm run dev
```

Verify:
- Landing header shows `About us` and routes to `/about`.
- `/about` renders all five approved sections and CTA buttons.
- Header remains visually stable at desktop and mobile breakpoints.

- [ ] **Step 4: Commit verification-safe final adjustments (if any)**

```bash
git add pages/about.tsx components/landing/LandingPage.tsx tests/landing/about-page.test.tsx tests/landing/theme-toggle.test.tsx
git commit -m "test: verify about page and landing navigation integration"
```

---

## Spec Coverage Check

- **Nav update requirement** → Covered in Task 3.
- **Dedicated `/about` page requirement** → Covered in Task 2.
- **Narrative-first IA (hero, who we are, how we work, why choose us, CTA)** → Covered in Task 2.
- **Blended tone and conversion/trust balance** → Reflected in Task 2 copy and CTA structure.
- **Testing and regression safety** → Covered in Tasks 1 and 4.

## Placeholder and Consistency Check

- No `TODO/TBD` placeholders.
- All referenced files are explicit and consistent with repository structure.
- Test commands align with `package.json` scripts (`vitest run` via `npm run test -- ...`).
