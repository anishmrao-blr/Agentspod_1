# AgentsPod Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and ship a SevenSense-inspired, original `agentspod.ai` landing page with a discovery-call conversion flow.

**Architecture:** Use a single-page Next.js app-router site with Tailwind CSS and componentized sections for Hero, Audience, Toolkit, Impact, Process, Proof, and CTA. Keep all copy and metric cards config-driven so future edits do not require JSX rewrites.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, ESLint, PostCSS, npm

---

## File Structure

- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `.eslintrc.json`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `app/components/site-header.tsx`
- Create: `app/components/hero.tsx`
- Create: `app/components/audience-split.tsx`
- Create: `app/components/toolkit.tsx`
- Create: `app/components/impact.tsx`
- Create: `app/components/process-strip.tsx`
- Create: `app/components/proof.tsx`
- Create: `app/components/final-cta.tsx`
- Create: `app/components/site-footer.tsx`
- Create: `app/lib/content.ts`
- Create: `public/favicon.ico`
- Create: `README.md`
- Test: `npm run lint`
- Test: `npm run build`

### Task 1: Bootstrap Next.js + Tailwind Foundation

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`, `.eslintrc.json`

- [ ] **Step 1: Write the initial project manifests and config files**

```json
{
  "name": "agentspod-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
```

```ts
// next.config.ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {};
export default nextConfig;
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`  
Expected: install completes with `added ... packages` and zero errors.

- [ ] **Step 3: Verify toolchain compiles**

Run: `npm run lint`  
Expected: either pass or fail only because app files are not created yet.

- [ ] **Step 4: Commit foundation files**

```bash
git add package.json tsconfig.json next.config.ts postcss.config.mjs tailwind.config.ts .eslintrc.json package-lock.json
git commit -m "chore: bootstrap nextjs and tailwind foundation"
```

### Task 2: Create Global Layout and Design Tokens

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Write failing style expectation by referencing token classes in layout**

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface-page text-foreground-default antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Run build to confirm missing token classes fail design expectation**

Run: `npm run build`  
Expected: build passes technically, but visual tokens are undefined until Tailwind theme extension and CSS variables are added.

- [ ] **Step 3: Implement token system in Tailwind + CSS variables**

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-page": "var(--surface-page)",
        "surface-raised": "var(--surface-raised)",
        "foreground-default": "var(--foreground-default)",
        "foreground-muted": "var(--foreground-muted)",
        "accent-primary": "var(--accent-primary)"
      }
    }
  },
  plugins: []
} satisfies Config;
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --surface-page: #070b14;
  --surface-raised: #0f172a;
  --foreground-default: #f8fafc;
  --foreground-muted: #94a3b8;
  --accent-primary: #22d3ee;
}
```

- [ ] **Step 4: Re-run lint/build to verify base styling layer**

Run: `npm run lint && npm run build`  
Expected: both commands pass.

- [ ] **Step 5: Commit global layout and token baseline**

```bash
git add app/layout.tsx app/globals.css tailwind.config.ts
git commit -m "feat: add global layout and design token foundation"
```

### Task 3: Implement Config-Driven Page Content Model

**Files:**
- Create: `app/lib/content.ts`

- [ ] **Step 1: Write failing usage contract by defining strict types and exports**

```ts
// app/lib/content.ts
export type ToolkitItem = { title: string; summary: string };
export type ProcessStep = { title: string; summary: string };
export type Metric = { label: string; value: string };
```

- [ ] **Step 2: Add approved copy content from design spec**

```ts
export const heroContent = {
  eyebrow: "FOR FOUNDERS & SMB OPERATORS",
  headline: "YOUR END-TO-END AI PRODUCT PARTNER.",
  subhead:
    "From strategy to shipped agents, we help ambitious teams design, build, and scale AI systems that drive measurable business impact.",
  primaryCta: "Book a Discovery Call",
  secondaryCta: "See How We Work"
};
```

```ts
export const toolkitItems: ToolkitItem[] = [
  { title: "AI AGENTS", summary: "Autonomous workflows that run 24/7 across critical operations." },
  { title: "AUTOMATION", summary: "Process optimization across ops, sales, and support systems." },
  { title: "CUSTOM AI PRODUCT DEV", summary: "From MVP builds to production-ready AI product delivery." },
  { title: "GEN AI INTEGRATION", summary: "Practical LLM integrations for internal and customer-facing workflows." }
];
```

- [ ] **Step 3: Add process and proof placeholder data**

```ts
export const processSteps: ProcessStep[] = [
  { title: "DISCOVER", summary: "Align on business goals, constraints, and opportunities." },
  { title: "DESIGN", summary: "Define architecture and execution scope with practical milestones." },
  { title: "DEPLOY", summary: "Ship reliable agents and automations into production workflows." },
  { title: "OPTIMIZE", summary: "Iterate with performance and impact data for sustained gains." }
];
```

```ts
export const proofMetrics: Metric[] = [
  { label: "Projects Delivered", value: "12+" },
  { label: "Time to First Prototype", value: "2-4 weeks" },
  { label: "Operational Hours Saved", value: "100s / month" }
];
```

- [ ] **Step 4: Commit content model and approved copy**

```bash
git add app/lib/content.ts
git commit -m "feat: add config-driven landing page content model"
```

### Task 4: Build Section Components

**Files:**
- Create: `app/components/site-header.tsx`
- Create: `app/components/hero.tsx`
- Create: `app/components/audience-split.tsx`
- Create: `app/components/toolkit.tsx`
- Create: `app/components/impact.tsx`
- Create: `app/components/process-strip.tsx`
- Create: `app/components/proof.tsx`
- Create: `app/components/final-cta.tsx`
- Create: `app/components/site-footer.tsx`

- [ ] **Step 1: Create `site-header.tsx` and `hero.tsx`**

```tsx
// app/components/site-header.tsx
import Link from "next/link";
import { heroContent } from "../lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-widest">AGENTSPOD.AI</span>
        <div className="hidden gap-6 text-sm md:flex">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </div>
        <Link href="#contact" className="rounded-full bg-accent-primary px-4 py-2 text-black font-semibold">
          {heroContent.primaryCta}
        </Link>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Create audience/toolkit/impact/process/proof/final/footer components**

```tsx
// app/components/impact.tsx
export function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs font-semibold tracking-[0.3em] text-accent-primary">IMPACT</p>
      <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight">SYSTEMS THAT DELIVER IMPACT.</h2>
      <p className="mt-4 max-w-2xl text-foreground-muted">
        No hype. Just high-performance AI systems built to improve speed, efficiency, and growth.
      </p>
    </section>
  );
}
```

- [ ] **Step 3: Run lint to catch component typing/import issues**

Run: `npm run lint`  
Expected: pass with no unresolved imports.

- [ ] **Step 4: Commit section components**

```bash
git add app/components
git commit -m "feat: add reusable landing page section components"
```

### Task 5: Compose the Page and Validate Conversion Flow

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Compose all sections in approved order**

```tsx
// app/page.tsx
import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { AudienceSplit } from "./components/audience-split";
import { Toolkit } from "./components/toolkit";
import { Impact } from "./components/impact";
import { ProcessStrip } from "./components/process-strip";
import { Proof } from "./components/proof";
import { FinalCta } from "./components/final-cta";
import { SiteFooter } from "./components/site-footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AudienceSplit />
        <Toolkit />
        <Impact />
        <ProcessStrip />
        <Proof />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 2: Run dev server and manually verify CTA placement**

Run: `npm run dev`  
Expected: page loads at `http://localhost:3000` with CTA visible in header, hero, and final band.

- [ ] **Step 3: Validate production build**

Run: `npm run build`  
Expected: Next.js production build completes successfully.

- [ ] **Step 4: Commit page composition**

```bash
git add app/page.tsx
git commit -m "feat: compose landing page flow with conversion-first order"
```

### Task 6: Add README, Accessibility Checks, and Final Verification

**Files:**
- Create: `README.md`
- Modify: `app/components/*` (only if accessibility fixes are needed)

- [ ] **Step 1: Document local setup and deployment basics**

```md
# AgentsPod Landing Page

## Run locally
- `npm install`
- `npm run dev`

## Quality checks
- `npm run lint`
- `npm run build`
```

- [ ] **Step 2: Execute final verification commands**

Run: `npm run lint && npm run build`  
Expected: both pass.

- [ ] **Step 3: Accessibility verification checklist**

Run manual checks:
- Keyboard-only navigation reaches nav links and CTA buttons.
- Contrast is readable for body text and CTA.
- Heading order is logical (`h1` then section `h2`).

Expected: no major accessibility blockers.

- [ ] **Step 4: Commit docs and final fixes**

```bash
git add README.md app/components app/page.tsx app/globals.css
git commit -m "docs: add runbook and finalize accessibility for landing page"
```

## Self-Review

Spec coverage check:
- Hero positioning and copy: covered in Tasks 3-5.
- Page structure and section sequence: covered in Task 5.
- Visual style system and premium dark theme: covered in Task 2.
- CTA consistency and conversion rules: covered in Tasks 4-5.
- Proof placeholders and process strip: covered in Tasks 3-4.
- Testing/accessibility/performance gates: covered in Task 6.

Placeholder scan:
- No `TODO`, `TBD`, or unresolved references in tasks.

Type consistency:
- Shared content types (`ToolkitItem`, `ProcessStep`, `Metric`) defined once in `app/lib/content.ts` and consumed by components.
