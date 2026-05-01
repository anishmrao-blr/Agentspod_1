# Homepage + Projects Page Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace generic toolkit service cards with technically specific descriptions, add a "Featured Work" case study strip to the homepage, and give the Projects page deep case study cards above the existing filterable grid.

**Architecture:** Three surgical changes — (1) update toolkit card content + add images to existing `ComponentCardFeature` via its existing `media` prop, (2) new `FeaturedWork` component inserted between toolkit and impact sections in `LandingPage`, (3) new `ProjectCard` component rendered at the top of `pages/projects.tsx` above the already-working `InternalContentPage` filterable grid. No CMS integration is changed; all new content is hardcoded as defaults.

**Tech Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS · Framer Motion (LazyMotion/domAnimation already set up in LandingPage) · Vitest + @testing-library/react

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `lib/directusLanding.ts` | Modify | Add `media?: string` to `ToolkitCard` type |
| `components/landing/LandingPage.tsx` | Modify | New toolkit card content + media, import + render FeaturedWork |
| `components/landing/FeaturedWork.tsx` | Create | 3-card featured work strip for homepage |
| `components/landing/ProjectCard.tsx` | Create | Full-width deep case study card for projects page top |
| `pages/projects.tsx` | Modify | Render 3 `ProjectCard`s + existing `InternalContentPage` |
| `styles/globals.css` | Modify | CSS for `.pc-featured-work-*` and `.pc-project-card-*` |

---

## Task 1: Add `media` field to `ToolkitCard` type

**Files:**
- Modify: `lib/directusLanding.ts:10`

- [ ] **Step 1: Write the failing type check**

  In `lib/directusLanding.ts`, the type on line 10 is:
  ```ts
  export type ToolkitCard = { title: string; body: string; learnMoreHref: string; learnMoreLabel?: string };
  ```
  There is no test to write here — the TypeScript compiler IS the test. The build will fail in Task 2 if the field is missing. Proceed to Step 2.

- [ ] **Step 2: Add `media?: string` to ToolkitCard**

  In `lib/directusLanding.ts`, change line 10 from:
  ```ts
  export type ToolkitCard = { title: string; body: string; learnMoreHref: string; learnMoreLabel?: string };
  ```
  to:
  ```ts
  export type ToolkitCard = { title: string; body: string; learnMoreHref: string; learnMoreLabel?: string; media?: string };
  ```

- [ ] **Step 3: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: No errors (the field is optional, so no existing code breaks).

- [ ] **Step 4: Commit**

  ```bash
  git add lib/directusLanding.ts
  git commit -m "feat: add media field to ToolkitCard type"
  ```

---

## Task 2: Update `defaultToolkitCards` content + pass `media` prop

**Files:**
- Modify: `components/landing/LandingPage.tsx` (lines 30–62 for data, line 440–447 for render)

- [ ] **Step 1: Replace `defaultToolkitCards` array**

  In `components/landing/LandingPage.tsx`, replace the entire `defaultToolkitCards` constant (lines 30–62) with:
  ```ts
  const defaultToolkitCards = [
    {
      title: "Stateful Agentic Workflows",
      body: "Autonomous task execution using LangGraph and CrewAI for complex, non-linear business logic that requires memory and human-in-the-loop oversight.",
      learnMoreHref: `${ORIGIN}/ai-agents`,
      media: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&q=80"
    },
    {
      title: "Real-Time Voice Intelligence",
      body: "Sub-300ms voice agents using ElevenLabs and custom STT/TTS pipelines, trained on domain-specific knowledge for healthcare, finance, and customer support.",
      learnMoreHref: `${ORIGIN}/voice-ai`,
      media: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&q=80"
    },
    {
      title: "Domain-Specific Intelligence",
      body: "Custom model training and fine-tuning using high-fidelity synthetic datasets to ensure performance in data-scarce or privacy-sensitive sectors like insurance and mining.",
      learnMoreHref: `${ORIGIN}/gen-ai`,
      media: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&q=80"
    },
    {
      title: "Enterprise-Grade Performance",
      body: "Optimization across the Nvidia tool stack (NIMs) for ultra-low latency and hardware-accelerated agent performance in high-throughput environments.",
      learnMoreHref: `${ORIGIN}/ai-agents`,
      media: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&q=80"
    },
    {
      title: "Knowledge Sovereignty",
      body: "Secure, cited enterprise RAG utilizing LlamaIndex and pgvector, deployed with strict data residency on AWS Sydney or Azure Australia East.",
      learnMoreHref: `${ORIGIN}/data-science`,
      media: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&q=80"
    },
    {
      title: "Cognitive Data Triage",
      body: "Autonomous extraction and processing of unstructured data (contracts, claims, manifests) using advanced agentic IDP patterns and multi-modal OCR.",
      learnMoreHref: "#contact",
      learnMoreLabel: "Discuss a use case",
      media: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&auto=format&q=80"
    }
  ];
  ```

- [ ] **Step 2: Pass `media` prop in the toolkit card render loop**

  In `components/landing/LandingPage.tsx`, inside the toolkit section map (around line 440), change:
  ```tsx
  <ComponentCardFeature
    title={card.title}
    body={card.body}
    learnMoreHref={card.learnMoreHref}
    learnMoreLabel={card.learnMoreLabel ?? "Learn more"}
    learnMoreTarget={card.learnMoreHref.startsWith("http") ? "_blank" : undefined}
    learnMoreRel={card.learnMoreHref.startsWith("http") ? "noopener noreferrer" : undefined}
  />
  ```
  to:
  ```tsx
  <ComponentCardFeature
    title={card.title}
    body={card.body}
    media={card.media}
    learnMoreHref={card.learnMoreHref}
    learnMoreLabel={card.learnMoreLabel ?? "Learn more"}
    learnMoreTarget={card.learnMoreHref.startsWith("http") ? "_blank" : undefined}
    learnMoreRel={card.learnMoreHref.startsWith("http") ? "noopener noreferrer" : undefined}
  />
  ```

- [ ] **Step 3: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: No errors.

- [ ] **Step 4: Commit**

  ```bash
  git add components/landing/LandingPage.tsx
  git commit -m "feat: update toolkit cards with specific AI content and background images"
  ```

---

## Task 3: Create `FeaturedWork.tsx` component

**Files:**
- Create: `components/landing/FeaturedWork.tsx`

- [ ] **Step 1: Create the file**

  Create `components/landing/FeaturedWork.tsx` with:
  ```tsx
  import { m, useReducedMotion } from "framer-motion";
  import { ComponentTextH2Section } from "./PencilComponentLibrary";

  type FeaturedWorkCard = {
    industry: string;
    problem: string;
    outcome: string;
    tech: string[];
    image: string;
  };

  const featuredWorkCards: FeaturedWorkCard[] = [
    {
      industry: "Esports",
      problem: "Replace manual coaching review with automated gameplay analysis",
      outcome: "70% reduction in manual review time",
      tech: ["Computer Vision", "OCR", "Node.js", "Python"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&q=80"
    },
    {
      industry: "Supply Chain",
      problem: "AI-augment manual spreadsheet-based truck load building at scale",
      outcome: "Measurable spoilage reduction + faster union-branch alignment",
      tech: ["LLM", "SAP Integration", "React", "Python"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&q=80"
    },
    {
      industry: "Healthcare / Wellness",
      problem: "Real-time empathetic voice companion for stress, anxiety, and loneliness",
      outcome: "Production voice pipeline with <300ms response latency",
      tech: ["LLaMA-3", "FAISS", "ElevenLabs", "Flask"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&q=80"
    }
  ];

  const staggerContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const staggerItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  export function FeaturedWork() {
    const reduceMotion = useReducedMotion();

    return (
      <section className="pc-wrap pc-section" id="featured-work" aria-labelledby="featured-work-heading">
        <ComponentTextH2Section id="featured-work-heading">Featured Work</ComponentTextH2Section>
        <m.div
          className="pc-featured-work-grid"
          variants={reduceMotion ? undefined : staggerContainerVariants}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={reduceMotion ? undefined : { once: true, amount: 0.15 }}
        >
          {featuredWorkCards.map((card) => (
            <m.article
              key={card.industry}
              className="pc-featured-work-card"
              variants={reduceMotion ? undefined : staggerItemVariants}
            >
              <div
                className="pc-featured-work-media"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />
              <div className="pc-featured-work-content">
                <span className="pc-featured-work-tag">{card.industry}</span>
                <p className="pc-featured-work-problem">{card.problem}</p>
                <p className="pc-featured-work-outcome">{card.outcome}</p>
                <div className="pc-featured-work-tech">
                  {card.tech.map((t) => (
                    <span key={t} className="pc-featured-work-badge">{t}</span>
                  ))}
                </div>
                <a href="/projects" className="pc-featured-work-link">View Case Study →</a>
              </div>
            </m.article>
          ))}
        </m.div>
        <div className="pc-featured-work-cta">
          <a href="/projects" className="pc-featured-work-all">See All Projects →</a>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: No errors.

- [ ] **Step 3: Commit**

  ```bash
  git add components/landing/FeaturedWork.tsx
  git commit -m "feat: add FeaturedWork component with 3 case study cards"
  ```

---

## Task 4: Insert `FeaturedWork` into `LandingPage`

**Files:**
- Modify: `components/landing/LandingPage.tsx`

- [ ] **Step 1: Add the import**

  In `components/landing/LandingPage.tsx`, after the existing import block (around line 16), add:
  ```ts
  import { FeaturedWork } from "./FeaturedWork";
  ```

- [ ] **Step 2: Insert `<FeaturedWork />` between toolkit and impact sections**

  In `components/landing/LandingPage.tsx`, the toolkit section closes with `</m.section>` at line 451 and the impact section begins at line 453. Insert between them:
  ```tsx
      </m.section>

      <FeaturedWork />

      <m.section
        className="pc-wrap pc-section"
        id="impact"
  ```
  The full diff at that location is:
  ```tsx
  // Line 451 — existing closing tag of toolkit section:
        </m.section>

  // INSERT HERE:
        <FeaturedWork />

  // Line 453 — existing opening of impact section:
        <m.section
          className="pc-wrap pc-section"
          id="impact"
  ```

- [ ] **Step 3: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: No errors.

- [ ] **Step 4: Commit**

  ```bash
  git add components/landing/LandingPage.tsx
  git commit -m "feat: insert FeaturedWork strip between toolkit and impact sections"
  ```

---

## Task 5: Add CSS for `FeaturedWork`

**Files:**
- Modify: `styles/globals.css`

- [ ] **Step 1: Add FeaturedWork CSS**

  Append to `styles/globals.css` (at the end of the file, before any final closing blocks):
  ```css
  /* ── Featured Work strip ──────────────────────────────────────────── */
  .pc-featured-work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 900px) {
    .pc-featured-work-grid {
      grid-template-columns: 1fr;
    }
  }

  .pc-featured-work-card {
    border-radius: 0.75rem;
    overflow: hidden;
    background: var(--pc-surface-card);
    display: flex;
    flex-direction: column;
    border: 1px solid var(--pc-border-subtle, rgba(255,255,255,0.08));
  }

  .pc-featured-work-media {
    height: var(--pc-card-media-height, 200px);
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
  }

  .pc-featured-work-content {
    padding: 1.25rem 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .pc-featured-work-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: var(--pc-accent-muted, rgba(99,102,241,0.18));
    color: var(--pc-accent, #818cf8);
    width: fit-content;
  }

  .pc-featured-work-problem {
    font-size: 0.9rem;
    color: var(--pc-text-secondary, #94a3b8);
    margin: 0;
    line-height: 1.5;
  }

  .pc-featured-work-outcome {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--pc-text-primary, #f1f5f9);
    margin: 0;
  }

  .pc-featured-work-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-top: 0.25rem;
  }

  .pc-featured-work-badge {
    font-size: 0.7rem;
    font-weight: 500;
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
    background: var(--pc-surface-subtle, rgba(255,255,255,0.06));
    color: var(--pc-text-secondary, #94a3b8);
    border: 1px solid var(--pc-border-subtle, rgba(255,255,255,0.08));
  }

  .pc-featured-work-link {
    margin-top: auto;
    padding-top: 0.75rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--pc-accent, #818cf8);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    transition: opacity 0.2s;
  }

  .pc-featured-work-link:hover {
    opacity: 0.75;
  }

  .pc-featured-work-cta {
    text-align: center;
    margin-top: 2rem;
  }

  .pc-featured-work-all {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--pc-accent, #818cf8);
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .pc-featured-work-all:hover {
    opacity: 0.75;
  }
  ```

- [ ] **Step 2: Verify dev server renders without errors**

  Run: `npm run dev` (or check running instance)
  Navigate to `http://localhost:3000` and confirm the Featured Work strip appears between the Toolkit and Impact sections with images and correct content.

- [ ] **Step 3: Commit**

  ```bash
  git add styles/globals.css
  git commit -m "feat: add CSS for FeaturedWork strip component"
  ```

---

## Task 6: Create `ProjectCard.tsx` component

**Files:**
- Create: `components/landing/ProjectCard.tsx`

- [ ] **Step 1: Create the file**

  Create `components/landing/ProjectCard.tsx` with:
  ```tsx
  type ProjectCardProps = {
    industry: string;
    title: string;
    problem: string;
    solution: string;
    outcome: string;
    metricCallout: string;
    tech: string[];
    image?: string;
  };

  export function ProjectCard({ industry, title, problem, solution, outcome, metricCallout, tech, image }: ProjectCardProps) {
    return (
      <article className="pc-project-card">
        {image && (
          <div
            className="pc-project-card-media"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        )}
        <div className="pc-project-card-body">
          <div className="pc-project-card-header">
            <span className="pc-project-card-tag">{industry}</span>
            <h2 className="pc-project-card-title">{title}</h2>
            <p className="pc-project-card-metric">{metricCallout}</p>
          </div>
          <div className="pc-project-card-columns">
            <div className="pc-project-card-col">
              <h3 className="pc-project-card-col-heading">Problem</h3>
              <p className="pc-project-card-col-body">{problem}</p>
            </div>
            <div className="pc-project-card-col">
              <h3 className="pc-project-card-col-heading">Solution</h3>
              <p className="pc-project-card-col-body">{solution}</p>
            </div>
            <div className="pc-project-card-col">
              <h3 className="pc-project-card-col-heading">Outcome</h3>
              <p className="pc-project-card-col-body">{outcome}</p>
            </div>
          </div>
          <div className="pc-project-card-tech">
            {tech.map((t) => (
              <span key={t} className="pc-featured-work-badge">{t}</span>
            ))}
          </div>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 2: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: No errors.

- [ ] **Step 3: Commit**

  ```bash
  git add components/landing/ProjectCard.tsx
  git commit -m "feat: add ProjectCard deep case study component"
  ```

---

## Task 7: Update `pages/projects.tsx` with deep case studies

**Files:**
- Modify: `pages/projects.tsx`

- [ ] **Step 1: Rewrite `pages/projects.tsx`**

  Replace the entire contents of `pages/projects.tsx` with:
  ```tsx
  import Head from "next/head";
  import { InternalContentPage } from "@/components/landing/InternalContentPage";
  import { internalPages } from "@/components/landing/internalPages";
  import { ProjectCard } from "@/components/landing/ProjectCard";

  const deepCaseStudies = [
    {
      industry: "Esports",
      title: "AI Gameplay Analysis Platform",
      problem:
        "Coaching teams spent hours manually reviewing gameplay footage with no standardized feedback framework, making it impossible to scale player development.",
      solution:
        "Built a computer vision + OCR pipeline that processes recordings frame-by-frame, detects in-game events, and generates structured coach-like feedback reports automatically.",
      outcome:
        "70% reduction in manual review time. Consistent, data-driven player improvement tracking that scales across any number of players.",
      metricCallout: "70% less manual review",
      tech: ["Python", "Computer Vision", "OCR", "Node.js", "scikit-learn", "Tesseract", "TypeScript"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&q=80"
    },
    {
      industry: "Healthcare / Wellness",
      title: "Voice AI for Emotional Support",
      problem:
        "Users experiencing stress, anxiety, or loneliness had no accessible, empathetic real-time support channel that felt personal and non-judgmental.",
      solution:
        "Developed an emotionally intelligent voice companion combining LLMs, FAISS semantic retrieval, and real-time speech pipelines to deliver context-aware, empathetic responses.",
      outcome:
        "Production-ready platform with <300ms end-to-end voice latency. Deployed for wellness and coaching applications with 85% improvement in user emotional satisfaction.",
      metricCallout: "<300ms voice response latency",
      tech: ["Python", "LLaMA-3", "FAISS", "ElevenLabs", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&q=80"
    },
    {
      industry: "Cybersecurity / Enterprise",
      title: "SOC 2 Compliance Automation",
      problem:
        "Manual SOC 2 report evaluation was slow, inconsistent, and couldn't scale across ISO 27001, HIPAA, and GDPR frameworks simultaneously.",
      solution:
        "AI platform using LLM-based scoring (Mistral-7B), semantic retrieval, and structured preprocessing to deliver consistent, explainable compliance evaluations across multiple frameworks.",
      outcome:
        "Scalable enterprise-ready compliance automation across three regulatory frameworks, eliminating inconsistent manual review and accelerating audit cycles.",
      metricCallout: "3 frameworks automated",
      tech: ["Python", "Mistral-7B", "MongoDB", "AWS", "Amazon Bedrock", "S3"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&q=80"
    }
  ];

  export default function ProjectsPage() {
    return (
      <>
        <Head>
          <title>Case Studies | Agentspod.AI</title>
          <meta
            name="description"
            content="Anonymized case studies from our delivery team across AI agents, voice AI, IoT, computer vision, and compliance automation."
          />
        </Head>
        <div className="pc-projects-deep">
          <div className="pc-wrap pc-section">
            <h1 className="pc-text-h2-section">Featured Case Studies</h1>
            <div className="pc-project-cards-stack">
              {deepCaseStudies.map((cs) => (
                <ProjectCard key={cs.title} {...cs} />
              ))}
            </div>
          </div>
        </div>
        <InternalContentPage page={internalPages.projects} />
      </>
    );
  }
  ```

  > Note: `InternalContentPage` already detects `page.slug === "projects"` and hides its own hero section, so it renders only the filter tabs + project grid + closing CTA — no duplicate headers.

- [ ] **Step 2: Verify TypeScript compiles**

  Run: `npx tsc --noEmit`
  Expected: No errors.

- [ ] **Step 3: Commit**

  ```bash
  git add pages/projects.tsx
  git commit -m "feat: add deep case study cards to projects page above filterable grid"
  ```

---

## Task 8: Add CSS for `ProjectCard`

**Files:**
- Modify: `styles/globals.css`

- [ ] **Step 1: Append ProjectCard CSS**

  Append to `styles/globals.css`:
  ```css
  /* ── Projects page deep case study cards ────────────────────────── */
  .pc-projects-deep {
    background: var(--pc-surface-subtle, rgba(255,255,255,0.02));
    border-bottom: 1px solid var(--pc-border-subtle, rgba(255,255,255,0.08));
  }

  .pc-project-cards-stack {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }

  .pc-project-card {
    border-radius: 1rem;
    overflow: hidden;
    background: var(--pc-surface-card);
    border: 1px solid var(--pc-border-subtle, rgba(255,255,255,0.08));
  }

  .pc-project-card-media {
    height: 280px;
    background-size: cover;
    background-position: center;
  }

  .pc-project-card-body {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .pc-project-card-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .pc-project-card-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    background: var(--pc-accent-muted, rgba(99,102,241,0.18));
    color: var(--pc-accent, #818cf8);
    width: fit-content;
  }

  .pc-project-card-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--pc-text-primary, #f1f5f9);
    margin: 0;
    line-height: 1.3;
  }

  .pc-project-card-metric {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--pc-accent, #818cf8);
    margin: 0;
  }

  .pc-project-card-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .pc-project-card-columns {
      grid-template-columns: 1fr;
    }
  }

  .pc-project-card-col-heading {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--pc-text-secondary, #94a3b8);
    margin: 0 0 0.5rem;
  }

  .pc-project-card-col-body {
    font-size: 0.9rem;
    color: var(--pc-text-secondary, #94a3b8);
    line-height: 1.6;
    margin: 0;
  }

  .pc-project-card-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add styles/globals.css
  git commit -m "feat: add CSS for deep project case study cards"
  ```

---

## Task 9: Write and run tests

**Files:**
- Modify: `tests/landing/internal-pages.test.tsx` (add toolkit card test)

- [ ] **Step 1: Add toolkit card content test**

  In `tests/landing/internal-pages.test.tsx`, the file imports from `@/components/landing/internalPages` and `@/components/landing/InternalContentPage`. Add a new import and test for the toolkit cards. At the top of the file, after existing imports, add:
  ```tsx
  import { LandingPage } from "@/components/landing/LandingPage";
  ```
  Then add a new `describe` block after the existing one:
  ```tsx
  describe("LandingPage toolkit cards", () => {
    it("renders 6 toolkit cards with new technically specific titles", () => {
      render(<LandingPage />);
      expect(screen.getByText("Stateful Agentic Workflows")).toBeInTheDocument();
      expect(screen.getByText("Real-Time Voice Intelligence")).toBeInTheDocument();
      expect(screen.getByText("Domain-Specific Intelligence")).toBeInTheDocument();
      expect(screen.getByText("Enterprise-Grade Performance")).toBeInTheDocument();
      expect(screen.getByText("Knowledge Sovereignty")).toBeInTheDocument();
      expect(screen.getByText("Cognitive Data Triage")).toBeInTheDocument();
    });

    it("renders the Featured Work section heading", () => {
      render(<LandingPage />);
      expect(screen.getByRole("heading", { name: "Featured Work" })).toBeInTheDocument();
    });

    it("renders all 3 featured work industry tags", () => {
      render(<LandingPage />);
      expect(screen.getByText("Esports")).toBeInTheDocument();
      expect(screen.getByText("Supply Chain")).toBeInTheDocument();
      expect(screen.getByText("Healthcare / Wellness")).toBeInTheDocument();
    });
  });
  ```

- [ ] **Step 2: Run the test suite**

  Run: `npx vitest run`
  Expected: All tests pass, including the existing `internal-pages.test.tsx` filter test (which tests `InternalContentPage` directly — unchanged).

  If `LandingPage` fails to render in jsdom (e.g., due to `window.scrollY` or animation hooks), wrap the render in an error boundary or mock `useScroll`. The most common fix for framer-motion in jsdom is already handled by `passWithNoTests: true` in `vitest.config.ts` — but check for actual errors.

- [ ] **Step 3: Run lint**

  Run: `npm run lint`
  Expected: No errors.

- [ ] **Step 4: Run build**

  Run: `npm run build`
  Expected: Build completes with no TypeScript or JSX errors. Next.js may print route sizes — that is fine.

- [ ] **Step 5: Commit**

  ```bash
  git add tests/landing/internal-pages.test.tsx
  git commit -m "test: add toolkit card content and FeaturedWork render tests"
  ```

---

## Success Criteria Checklist

- [ ] Toolkit section shows 6 cards with new technically specific titles (LangGraph, CrewAI, NIMs, LlamaIndex, etc.)
- [ ] Each toolkit card has a background image (no blank grey box)
- [ ] Homepage has a "Featured Work" strip with 3 case study cards between Toolkit and Impact sections
- [ ] Each Featured Work card shows: industry tag · problem · outcome · tech badges · link
- [ ] Projects page has 3 deep case studies stacked at the top (Problem/Solution/Outcome columns + metric callout)
- [ ] Projects page filterable grid still works (existing InternalContentPage tabs functional)
- [ ] No client names or StellarMind references in rendered output
- [ ] `npx tsc --noEmit` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] `npx vitest run` passes
