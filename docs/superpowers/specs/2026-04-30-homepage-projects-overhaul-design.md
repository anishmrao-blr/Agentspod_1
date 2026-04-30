# Design Spec: Homepage + Projects Page Overhaul

**Date:** 2026-04-30  
**Branch:** `feature/homepage-projects-overhaul`  
**Scope:** Approach A — surgical additions to homepage and full rewrite of Projects page

---

## Context

AgentsPod is a new brand reselling AI services delivered by a partner engineering firm (40+ engineers, ISO 9001 certified, 20+ shipped projects). Client names and the partner firm cannot be referenced publicly. All case studies must be anonymized.

The current site has generic service cards and no project proof. Competitors (Tribe.ai) show client logos, testimonials, and media badges. AgentsPod closes this gap with technically specific service descriptions and anonymized-but-detailed case studies.

---

## Change 1: Toolkit Service Cards (LandingPage.tsx)

**Location:** Toolkit section in `components/landing/LandingPage.tsx`  
**Change:** Replace the text content of all 6 service cards. No layout changes.

| # | New Title | New Description |
|---|---|---|
| 1 | Stateful Agentic Workflows | Autonomous task execution using LangGraph and CrewAI for complex, non-linear business logic that requires memory and human-in-the-loop oversight. |
| 2 | Real-Time Voice Intelligence | Sub-300ms voice agents using ElevenLabs and custom STT/TTS pipelines, trained on domain-specific knowledge for healthcare, finance, and customer support. |
| 3 | Domain-Specific Intelligence | Custom model training and fine-tuning using high-fidelity synthetic datasets to ensure performance in data-scarce or privacy-sensitive sectors like insurance and mining. |
| 4 | Enterprise-Grade Performance | Optimization across the Nvidia tool stack (NIMs) for ultra-low latency and hardware-accelerated agent performance in high-throughput environments. |
| 5 | Knowledge Sovereignty | Secure, cited enterprise RAG utilizing LlamaIndex and pgvector, deployed with strict data residency on AWS Sydney or Azure Australia East. |
| 6 | Cognitive Data Triage | Autonomous extraction and processing of unstructured data (contracts, claims, manifests) using advanced agentic IDP patterns and multi-modal OCR. |

---

## Change 2: Featured Work Strip (LandingPage.tsx)

**Location:** Insert between Toolkit section and Impact/Stats section in `components/landing/LandingPage.tsx`  
**New component:** `components/landing/FeaturedWork.tsx`

### Structure
- Section heading: "Featured Work"
- 3 cards in a horizontal row (stack to single column on mobile)
- Each card: industry tag · problem · outcome metric · tech badges · "View Case Study →" link
- Bottom CTA: "See All Projects →" → `/projects`

### Card Data

**Card 1 — Esports AI**
- Industry: `Esports`
- Problem: Replace manual coaching review with automated gameplay analysis
- Outcome: **70% reduction in manual review time**
- Tech: Computer Vision · OCR · Node.js · Python
- Image: Screenshot from PDF (Playformance gameplay analysis dashboard)

**Card 2 — FMCG Dispatch Intelligence**
- Industry: `Supply Chain`
- Problem: AI-augment manual spreadsheet-based truck load building at scale
- Outcome: **Measurable spoilage reduction + faster union-branch alignment**
- Tech: LLM · SAP Integration · React · Python
- Image: Screenshot from PDF (Amul dispatch dashboard)

**Card 3 — Voice AI Emotional Support**
- Industry: `Healthcare / Wellness`
- Problem: Real-time empathetic voice companion for stress, anxiety, and loneliness
- Outcome: **Production voice pipeline with <300ms response latency**
- Tech: LLaMA-3 · FAISS · ElevenLabs · Flask
- Image: Screenshot from PDF (Seryna AI architecture diagram)

### Image Strategy
- PDF screenshots are extracted and placed in `public/images/case-studies/`
- Fallback stock images for cards without clear screenshots:
  - Supply chain / logistics: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d (warehouse/logistics)
  - Healthcare AI: https://images.unsplash.com/photo-1576091160399-112ba8d25d1d (healthcare tech)
  - Esports: https://images.unsplash.com/photo-1542751371-adc38448a05e (gaming setup)

---

## Change 3: Projects Page Rewrite (pages/projects.tsx)

**Location:** `pages/projects.tsx`  
**New component:** `components/landing/ProjectCard.tsx` (deep case study card)  
**New component:** `components/landing/ProjectGrid.tsx` (filterable light grid)

### Page Structure

#### Section A — Deep Case Studies (top, 3 stacked full-width cards)

Each deep card contains:
- Title + industry tag badge
- Problem / Solution / Outcome — 3-column layout
- Key metric callout (large bold stat)
- Tech stack badges (logo icons where available, text fallback)
- Screenshot image (from PDF where available)

**Featured Case Study 1 — AI Gameplay Analysis**
- Industry: Esports
- Problem: Coaching teams spent hours manually reviewing gameplay footage with no standardized feedback
- Solution: Built a computer vision + OCR pipeline that processes recordings frame-by-frame, detects in-game events, and generates structured coach-like feedback reports
- Outcome: 70% reduction in manual review time; consistent, data-driven player improvement tracking
- Metric callout: **70% less manual review**
- Tech: Python · Computer Vision · OCR · Node.js · scikit-learn · Tesseract · TypeScript
- Image: Playformance dashboard screenshot (from PDF)

**Featured Case Study 2 — Voice AI for Emotional Support**
- Industry: Healthcare / Wellness
- Problem: Users experiencing stress, anxiety, or loneliness had no accessible, empathetic real-time support channel
- Solution: Developed an emotionally intelligent voice companion combining LLMs, FAISS semantic retrieval, and real-time speech pipelines to deliver context-aware, empathetic responses
- Outcome: Production-ready platform with <300ms end-to-end voice latency; deployed for wellness and coaching applications
- Metric callout: **<300ms voice response latency**
- Tech: Python · LLaMA-3 · FAISS · ElevenLabs · Flask · React · Meta
- Image: Seryna AI architecture diagram (from PDF)

**Featured Case Study 3 — SOC 2 Compliance Automation**
- Industry: Cybersecurity / Enterprise
- Problem: Manual SOC 2 report evaluation was slow, inconsistent, and couldn't scale across ISO 27001, HIPAA, and GDPR simultaneously
- Solution: AI platform using LLM-based scoring (Mistral-7B), semantic retrieval, and structured preprocessing to deliver consistent, explainable compliance evaluations
- Outcome: Scalable enterprise-ready compliance automation across multiple regulatory frameworks
- Metric callout: **3 frameworks automated** (ISO 27001, HIPAA, GDPR)
- Tech: Python · Mistral-7B · MongoDB · AWS · Amazon Bedrock · S3
- Image: SOC 2 automation diagram (from PDF)

#### Section B — Project Grid (all remaining projects, filterable)

Filter tags: `All` · `AI Agents` · `Voice AI` · `IoT` · `Data Science` · `Computer Vision` · `Fintech` · `Healthcare` · `Real Estate` · `Construction`

Light grid cards (3-column, responsive to 2-col then 1-col):
Each card: title · industry tag · 1-sentence description · tech stack text badges

Projects in grid (18 remaining after deep case studies):
1. Smart Medical Waste System · Healthcare · IoT/CV system for compliance monitoring with <1s latency
2. Herman App · Education · AR storytelling app with AI-powered NPCs for children
3. FMCG Sales Data Pipeline · Data Science · ETL + BI pipeline eliminating data silos for an FMCG enterprise
4. Casino Analytics · Data Science · Scalable player behavior analytics with data governance
5. Vakta.tech · Voice AI · Voice-enabled AI agent platform for multi-channel business communication
6. AIVA Smart Home · IoT · Edge-powered home AI assistant with privacy-first computer vision
7. Stock Advisor App · Fintech · AI investment insights with real-time market intelligence
8. AI Interior Design · Real Estate · LiDAR-based room scanning + real-time 3D furniture staging
9. BIM Data Summarization · Construction · AI summarization of IFC files with metadata validation
10. AI Regulations Expert · Construction · RAG-based compliance Q&A for BIM projects
11. Property Measurement AI · Real Estate · Automated area/volume extraction from CAD/BIM files
12. Car Dent Detection · Insurance · CV-based vehicle damage detection for automated claim assessment
13. AI Banknote Intelligence · Fintech · MobileNet-V2/YOLO for 112+ denomination recognition and grading
14. View Smart Windows · IoT · Smart tinting control app with energy optimization (Swift + Firebase)
15. IoT Vending Solutions · IoT · Remote monitoring + predictive maintenance for vending deployments
16. Satellite QA Agent · GovTech · Geospatial image quality validation for government programs
17. AI Employee Engagement · HR Tech · Facial recognition + mood detection + HRMS attendance sync
18. Amul Dispatch Intelligence · Supply Chain · AI demand forecasting + SAP-integrated truck load builder

#### Section C — CTA
- Heading: "Ready to build something like this?"
- Button: "Start Your Project" → booking link
- Secondary: "or email us at [contact email]"

---

## File Changes Summary

| File | Change type |
|---|---|
| `components/landing/LandingPage.tsx` | Edit — update toolkit card content, insert FeaturedWork section |
| `components/landing/FeaturedWork.tsx` | New — 3-card featured work strip component |
| `components/landing/ProjectCard.tsx` | New — deep case study card component |
| `components/landing/ProjectGrid.tsx` | New — filterable project grid component |
| `pages/projects.tsx` | Rewrite — use new components, populate with case study data |
| `public/images/case-studies/` | New directory — extracted PDF screenshots |

---

## Out of Scope
- Stats/Impact section changes (Approach B — future)
- Hero headline changes
- New pages or routes
- CMS integration (content hardcoded for now)
- Animations beyond what already exists in the codebase

---

## Success Criteria
1. Toolkit section shows 6 new technically specific cards with correct content
2. Homepage has a "Featured Work" strip with 3 case study cards above the stats section
3. Projects page has 3 deep case studies at top and a filterable grid of 18 projects below
4. All case studies are anonymized — no client names, no StellarMind references
5. Site builds without errors (`npm run build` passes)
6. Lint passes (`npm run lint`)
