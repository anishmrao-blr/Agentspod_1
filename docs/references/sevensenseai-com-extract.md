# SevenSense AI — site extract (reference)

**Source:** [https://www.sevensenseai.com/](https://www.sevensenseai.com/)  
**Captured:** 2026-04-27 via Firecrawl MCP (`firecrawl_map`, `firecrawl_scrape`).  
**Purpose:** IA, copy, CTAs, and brand tokens for aligning local work (e.g. `http://localhost:3000/#home`) **without** replacing your existing component library—use this as content/structure spec only.

---

## 1. Sitemap (discovered URLs)

Firecrawl `map` returned **11** canonical site URLs (www). Internal pages:

| URL | Map title | Map description |
|-----|-----------|-----------------|
| https://www.sevensenseai.com/ | SevenSense AI \| Engineering Intelligence | The technical partner for ambitious founders and forward-thinking enterprises… |
| https://www.sevensenseai.com/ai-agents | AI Agents \| Seven Sense AI \| SevenSense AI | Autonomous agents that work 24/7 to automate your business operations. |
| https://www.sevensenseai.com/gen-ai | Generative AI \| Seven Sense AI \| SevenSense AI | Custom LLMs and generative solutions… Legal, Real Estate, Marketing. |
| https://www.sevensenseai.com/data-science | Data Science \| Seven Sense AI \| SevenSense AI | Advanced analytics, predictive modeling, and data infrastructure… |
| https://www.sevensenseai.com/voice-ai | Voice AI \| Seven Sense AI \| SevenSense AI | Human-like conversational AI for customer support and sales automation. |
| https://www.sevensenseai.com/software-development | Software Development \| Seven Sense AI \| SevenSense AI | Full-stack engineering, cloud architecture, scalable web applications. |
| https://www.sevensenseai.com/projects | Projects \| Seven Sense AI \| SevenSense AI | Case studies and success stories… |
| https://www.sevensenseai.com/careers | Careers \| Seven Sense AI \| SevenSense AI | Join our team of engineers, researchers, and builders… |
| https://www.sevensenseai.com/contact | Contact \| Seven Sense AI \| SevenSense AI | Get in touch with our engineering team… |
| https://www.sevensenseai.com/privacy | Privacy Policy \| Seven Sense AI \| SevenSense AI | How we handle your data. |
| https://www.sevensenseai.com/terms | Terms of Service \| Seven Sense AI \| SevenSense AI | Rules governing use of website and services. |

**Homepage-only link (not in sitemap map list):** `https://www.sevensenseai.com/automation` — **HTTP 404** when scraped (dead link from “THE TOOLKIT” grid). Treat toolkit “Automation” as **copy + route TBD** or map to an existing service page when you rebuild `#home`.

**Hash / SPA anchors:** Footer references `https://www.sevensenseai.com/#about` (in-page section, not a separate file).

---

## 2. Information architecture (structure)

```
SevenSense AI
├── Primary nav
│   ├── Services (dropdown)
│   │   ├── AI Agents          → /ai-agents
│   │   ├── Generative AI      → /gen-ai
│   │   ├── Data Science       → /data-science
│   │   ├── Voice AI           → /voice-ai
│   │   └── Software Dev       → /software-development
│   ├── Projects               → /projects
│   ├── Careers                → /careers
│   └── Contact                → /contact
├── Header CTA
│   └── BOOK A MEET →          → external Cal.com
└── Footer
    ├── Brand blurb + social
    │   ├── LinkedIn           → linkedin.com/company/sevensense-ai
    │   ├── Email              → mailto:hello@sevensenseai.com
    │   └── Book a Meeting     → Cal.com
    ├── Solutions              → same 4 as nav minus Software Dev in footer list*
    ├── Company                → #about, /projects, /careers, /contact
    └── Legal                  → /privacy, /terms
```

\*Footer “Solutions” lists: AI Agents, Generative AI, Data Science, Voice AI (no Software Dev in that column on the scraped page).

---

## 3. Homepage — section outline and copy

**Hero**

- **H1:** `ENGINEERING INTELLIGENCE.` (line break after “ENGINEERING” in live layout)
- **Sub:** The technical partner for ambitious founders and forward-thinking enterprises. We build the AI systems that power the future.

**Audience split — Founders**

- **Eyebrow:** FOR FOUNDERS
- **H2:** Build a Product
- **Body:** We act as your technical co-founder. From MVP to scale, we turn your ambitious vision into a market-ready reality.
- **Tags / chips (UI):** `CUSTOM_DEV`, `MVP_TO_SCALE`, `GEN_AI_APPS` (scrape showed escaped underscores in markdown)
- **CTA:** Build a Product → `/contact?type=founder`

**Audience split — Enterprise**

- **Eyebrow:** FOR ENTERPRISE
- **H2:** Deploy a Solution
- **Body:** Automate operations and unlock new ROI. We integrate intelligent agents and voice systems directly into your workflows.
- **Tags:** `VOICE_AI`, `PROCESS_AUTO`, `AGENTS`
- **CTA:** Deploy a Solution → `/contact?type=enterprise`

**Toolkit**

- **H2:** THE TOOLKIT
- **Intro:** Our engineering core covers the entire spectrum of modern AI development.
- **Six cards** (title → URL, one-liner):

  1. **AI Agents** — Autonomous systems that execute complex workflows 24/7. → `/ai-agents`
  2. **Voice AI** — Human-parity voice interfaces for support and sales. → `/voice-ai`
  3. **Custom Dev** — Bespoke software architecture for unique business needs. → `/software-development`
  4. **Generative AI** — LLM integration for content, code, and creative generation. → `/gen-ai`
  5. **Data Science** — Predictive modeling and deep analytics to drive decisions. → `/data-science`
  6. **Automation** — End-to-end process streamlining with intelligent logic. → `/automation` (**404**)

**Impact**

- **H2:** SYSTEMS THAT DELIVER IMPACT.
- **Body:** Forget the buzzwords. We build high-performance AI solutions designed to improve your bottom line. Measurable impact, not just hype.
- **Stats row:** 10+ Research Papers & Patents \| 30+ In-House Engineers \| 75+ Successful Projects
- **Sub-block “Intelligence Metrics”:** +65% ROI INCREASE \| 23% CAC REDUCTION \| 5000+ HOURS SAVED

**Closing CTA**

- **H2:** READY TO BUILD?
- **Body:** Whether you're a founder with a vision or an enterprise with a problem, we have the engineering team to solve it.
- **Button:** START YOUR PROJECT → `/contact`

**Footer (brand)**

- Tagline: Engineering Intelligence. We build the AI infrastructure for founders and enterprises.
- © 2026 SevenSense AI. All rights reserved.

---

## 4. External destinations & query params

| Target | Use |
|--------|-----|
| https://cal.com/sevesenseai/30min | “BOOK A MEET”, “Book a Meeting” (note spelling **sevesenseai** in URL) |
| mailto:hello@sevensenseai.com | Email |
| https://www.linkedin.com/company/sevensense-ai | LinkedIn |
| `/contact?type=founder` | Founder funnel |
| `/contact?type=enterprise` | Enterprise funnel |

---

## 5. SEO / social (homepage metadata scrape)

- **Title:** SevenSense AI \| Engineering Intelligence  
- **Description:** The technical partner for ambitious founders and forward-thinking enterprises. We build the AI systems that power the future.  
- **Keywords (meta):** AI development, artificial intelligence, machine learning, AI agents, generative AI, data science, custom software development, AI consulting, voice AI, natural language processing, AI solutions  
- **OG/Twitter image:** `https://sevensenseai.com/images/ai-robot-background.png` (also referenced as og image on subpages)

---

## 6. Branding tokens (Firecrawl `branding` — approximate)

Use as **reference** for parity work; verify in browser DevTools before hard-coding tokens into your design system.

| Token | Value |
|-------|--------|
| Color scheme | light |
| Primary (UI gray) | `#9CA3AF` |
| Secondary / tint | `#EEDDFD` |
| Accent / links / primary button | `#FF4400` |
| Background | `#FFFFFF` |
| Text primary | `#0A0A0A` |
| Font | Inter (body + heading) |
| H1 size (detected) | 128px |
| H2 | 36px |
| Body | 24px |
| Border radius | 0px (buttons square) |
| Primary button | bg `#FF4400`, text `#FFFFFF` |
| Secondary button | bg `#FFFFFF`, text `#0A0A0A` |
| Logo (URL) | `…/images/logo/SevenSense AI Logo and Text.png` (via Next image optimizer) |
| Framework hint | Tailwind (inferred) |

**Personality (LLM-labeled):** modern tone, medium energy, audience: businesses seeking AI solutions.

---

## 7. Deeper page notes (summary scrapes)

- **AI Agents:** Autonomous “digital workers,” beyond chatbots—support automation, lead qualification, data processing, market research; 24/7, multi-modal, self-improvement, enterprise security; CTA to start custom agent projects.
- **Contact:** Book strategy call, email, LinkedIn; global regions (India, USA, Europe, Canada, Australia); startups vs enterprises (free architectural reviews vs security audits); FAQ on starting projects and support.

---

## 8. Machine-readable sitemap (paths only)

```json
{
  "origin": "https://www.sevensenseai.com",
  "internalPaths": [
    "/",
    "/ai-agents",
    "/gen-ai",
    "/data-science",
    "/voice-ai",
    "/software-development",
    "/projects",
    "/careers",
    "/contact",
    "/privacy",
    "/terms"
  ],
  "anchors": ["/#about"],
  "brokenOrUnverified": ["/automation"],
  "contactQueryPresets": ["?type=founder", "?type=enterprise"]
}
```

---

## 9. Using this with `localhost:3000/#home`

- Keep your **existing component library**; map each **section** above to a layout block (hero, dual audience columns, toolkit grid, metrics, footer).
- Replace or stub **Automation** until you have a real route or merge that messaging into another service page.
- Reuse **CTA matrix**: Cal.com, mailto, LinkedIn, typed `/contact` links—mirror URLs or swap for your own booking/email.
- Align **tokens** with your theme; Firecrawl values are a starting snapshot, not a guarantee of computed CSS (e.g. fluid type).

---

*End of extract.*
