# AgentsPod Image Curation Plan

This pack was curated in a structured order:

1. Audit current page sections and copy intent.
2. Define image requirements per section using UI/UX criteria.
3. Search web sources with Firecrawl.
4. Save selected images locally for Webflow upload.

## 1) Current Theme and Content Fit

- Visual theme: dark, high-contrast, modern B2B.
- Messaging: AI execution partner for founders and SMB teams.
- Section flow: Hero -> About -> Process -> Services -> Testimonials -> FAQ/CTA.
- UX focus: clear hierarchy, conversion-first CTA, minimal visual noise.

## 2) UI/UX-Based Image Requirements

- Hero:
  - One strong focal concept.
  - Should imply AI execution and business outcomes.
  - Avoid playful product-only images.
- About:
  - Human + strategic collaboration signal.
  - Professional team or leadership context.
- Process/Projects:
  - Data workflows, operations, systems, dashboards.
  - Images should support "how we deliver" narrative.
- Services:
  - Distinct visuals per service to reduce recall burden.
  - Keep style consistent (same photo treatment).
- Testimonials:
  - Simple, clean logos/marks to preserve readability.

## 3) Firecrawl Source Strategy

Firecrawl queries were run section-by-section, prioritizing:
- `site:pexels.com` for practical, uploadable photography.
- `site:unsplash.com` for abstract technology backgrounds.

## 4) Local Upload Pack

Folder:
- `assets/agentspod-webflow-upload-pack`

Primary curated files:
- `hero_01_team_collaboration.jpg`
- `hero_02_group_laptops.jpg`
- `hero_03_laptop_workspace.jpg`
- `service_01_team_meeting.jpg`
- `service_02_presentation.jpg`
- `service_03_woman_laptop.jpg`
- `process_01_abstract_orange_lights.png`
- `process_02_abstract_lights.jpg`
- `testimonial_logo_01_nova.png`
- `testimonial_logo_02_lumen.png`

Supporting records:
- `SOURCE_ATTRIBUTION.txt` (source URLs and mapping)

## 5) Recommended Webflow Mapping

- Hero marquee (3 slots):
  - `hero_01_team_collaboration.jpg`
  - `hero_02_group_laptops.jpg`
  - `hero_03_laptop_workspace.jpg`
- About image:
  - `service_01_team_meeting.jpg`
- Services (3 cards):
  - `service_01_team_meeting.jpg`
  - `service_02_presentation.jpg`
  - `service_03_woman_laptop.jpg`
- Process/Projects cards:
  - `process_01_abstract_orange_lights.png`
  - `process_02_abstract_lights.jpg`
- Testimonials:
  - `testimonial_logo_01_nova.png`
  - `testimonial_logo_02_lumen.png`
