/**
 * One-off preview capture: run dev on a fixed port, then:
 *   node scripts/capture-site-preview.mjs
 *
 * Output: site-preview-screenshots/*.png (viewport + full-page per route)
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cwd = path.join(__dirname, "..");
const base = process.env.PREVIEW_URL ?? "http://127.0.0.1:3055";
const outDir = path.join(cwd, "site-preview-screenshots");

const routes = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/ai-agents", name: "ai-agents" },
  { path: "/voice-ai", name: "voice-ai" },
  { path: "/document-intelligence", name: "document-intelligence" },
  { path: "/dpdp-compliance", name: "dpdp-compliance" },
  { path: "/supply-chain-ai", name: "supply-chain-ai" },
  { path: "/rag-knowledge", name: "rag-knowledge" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
  { path: "/qualify", name: "qualify" },
  { path: "/gen-ai", name: "gen-ai-redirect" },
  { path: "/data-science", name: "data-science-redirect" }
];

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1
});

for (const r of routes) {
  const page = await context.newPage();
  const url = `${base}${r.path}`;
  try {
    await page.goto(url, { waitUntil: "load", timeout: 90_000 });
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(outDir, `${r.name}-viewport.png`),
      fullPage: false
    });
    await page.screenshot({
      path: path.join(outDir, `${r.name}-full.png`),
      fullPage: true
    });
    console.log("captured", r.name, url);
  } catch (err) {
    console.error("FAILED", r.path, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done. Output:", outDir);
