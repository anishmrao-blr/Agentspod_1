# Official brand logos — research and downloads (Firecrawl MCP)

Research was done with the **Firecrawl MCP** (`firecrawl_search` for discovery, `firecrawl_scrape` for official pages and download links). Assets are saved under `downloads/` (and `downloads/extracted/` where ZIPs were unpacked).

## Important: `.fig` (Figma) vs what vendors actually publish

**None of the companies listed ship primary logo packs as downloadable `.fig` files.** Figma’s `.fig` format is a local/cloud document format produced by Figma (e.g. after importing assets). Official distribution is almost always **SVG, PNG, PDF, EPS, or ZIP** from brand, press, or architecture pages.

**Practical “Figma version” workflow:** In Figma, use **File → Import** (or drag in) the SVG/PNG from this folder, place each on its own frame if you want, then **File → Save local copy** (Figma desktop) to produce a `.fig` for your library. Always follow each vendor’s trademark and brand rules.

---

## Per-company summary

| Company | What we saved | Primary official sources (verified via scrape) | Notes |
|--------|----------------|--------------------------------------------------|--------|
| **OpenAI** | `openai-blossom-official.svg`, `openai-partnership-templates-2025.zip` (see extracted PSBs), `openai-logo-commons.svg` | [openai.com/brand](https://openai.com/brand/) — Blossom SVG from OpenAI’s Contentful CDN; partnership ZIP from `cdn.openai.com` | Wordmark lockups and templates are in the ZIP/brand site. `openai-logo-commons.svg` is **Wikimedia Commons** mirror — compare to current brand if pixel-perfect compliance matters. |
| **Anthropic** | `anthropic-logo-commons.svg` | No single Anthropic-hosted vector ZIP was surfaced in the first pass of search results; Commons file is a widely used vector reference | For strict compliance, confirm against [anthropic.com](https://www.anthropic.com/) and any partner/press guidance Anthropic provides. |
| **AWS** | `aws-powered-by-light.png`, `aws-powered-by-dark.png`, `aws-logo-smile-official.png` | [aws.amazon.com/co-marketing](https://aws.amazon.com/co-marketing/) — embedded `d0.awsstatic.com` “Powered by AWS” assets; smile logo from `a0.awsstatic.com` | Full trademark rules: [AWS Trademark Guidelines](https://aws.amazon.com/trademark-guidelines/). |
| **Google Cloud** | `google-cloud-logos-cloud-official.zip`, extracted `logo_googleCloud.png` | [googlecloudpresscorner.com/digital-assets](https://www.googlecloudpresscorner.com/digital-assets) — `download/logos-cloud.zip` | Broader product logo set: “Download All” on same page (large archive). |
| **NVIDIA** | `nvidia-logo-commons.svg` | [NVIDIA Logo & Brand Guidelines](https://www.nvidia.com/en-us/about-nvidia/legal-info/logo-brand-usage/); [NVIDIA Newsroom logos](https://nvidianews.nvidia.com/multimedia/corporate/nvidia-logos) | Newsroom `file?fid=…` links returned **HTML** when fetched without a browser session; **Commons SVG** is included as editable vector with trademark caveats. |
| **LangChain** | `langchain-logo-commons.svg` | [langchain.com](https://www.langchain.com/) (no dedicated press ZIP found in search); vector via **Wikimedia Commons** | Treat Commons as convenience; confirm with LangChain for partner use. |
| **ElevenLabs** | `elevenlabs-logos-official.zip`, `elevenlabs-logo-black-official.svg` | [elevenlabs.io/press](https://elevenlabs.io/press) — direct S3 URLs for SVG/PNG/ZIP | Strongest “official pack” in this set. |

---

## Firecrawl queries used (representative)

- OpenAI / Anthropic / AWS / Google Cloud / NVIDIA / LangChain / ElevenLabs: brand, press kit, logo download, official guidelines.
- `site:figma.com` community search for bundled “official” `.fig` kits — **no vendor-published `.fig`** surfaced; only unrelated Figma marketing/plugin pages.

---

## Files on disk

- **Flat downloads:** `downloads/*.svg`, `*.png`, `*.zip`
- **Extracted archives:** `downloads/extracted/openai-partnership/`, `google-cloud/`, `elevenlabs/`

---

## Legal

Logos are trademarks of their owners. Use only according to each company’s brand, press, and trademark policies. Wikimedia Commons files may carry their own licensing and trademark notices; they are **not** a substitute for legal clearance for commercial use.

## Figma canvas refresh (native fidelity)

The Figma file `VvrakxvcRDVDVP6XH1sZrz` was rebuilt so **SVG marks** use `figma.createNodeFromSvg` (editable vector layers in Figma, not flattened raster). **Official PNGs** use `figma.createImage` with **`scaleMode: FIT`** and rectangle dimensions matched to aspect ratio (avoids the stretched / inverted look from `upload_assets` + `FILL` + wrong aspect). Source URLs were confirmed with **Firecrawl** on `openai.com/brand` and match prior press/CDN research. Regenerate anytime: `scripts/run-use-figma.sh` builds `use-figma-payload.json` for the MCP `use_figma` call.
