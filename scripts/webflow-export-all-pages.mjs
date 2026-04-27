#!/usr/bin/env node
/**
 * Export all pages listed in webflow-export/agentspod-ai/pages-index.json
 * using GET /v2/pages/{page_id}/dom (same as MCP data_pages_tool get_page_content).
 *
 *   export WEBFLOW_API_TOKEN="..."
 *   node scripts/webflow-export-all-pages.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const indexPath = path.join(
  root,
  "webflow-export",
  "agentspod-ai",
  "pages-index.json"
);
const pagesDir = path.join(root, "webflow-export", "agentspod-ai", "pages");
const exporter = path.join(root, "scripts", "webflow-export-page-dom.mjs");

const token = process.env.WEBFLOW_API_TOKEN || process.env.WEBFLOW_TOKEN;
if (!token) {
  console.error("Set WEBFLOW_API_TOKEN (or WEBFLOW_TOKEN) with pages:read scope.");
  process.exit(1);
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
fs.mkdirSync(pagesDir, { recursive: true });

function runPageDom(pageId, outFile) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      [exporter, pageId, outFile],
      { stdio: "inherit", env: process.env }
    );
    child.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`exit ${code}`))
    );
  });
}

for (const p of index.pages) {
  const slug = p.slug === "/" ? "index" : p.slug.replace(/\//g, "-");
  const outFile = path.join(pagesDir, `${slug}-${p.id}.json`);
  console.log("Exporting", p.title, "->", outFile);
  await runPageDom(p.id, outFile);
}

console.log("Done.");
