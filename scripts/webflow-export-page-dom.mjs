#!/usr/bin/env node
/**
 * Dump Webflow page DOM (static content) to disk using the same Data API as MCP get_page_content.
 *
 * Usage:
 *   export WEBFLOW_API_TOKEN="your_token"   # Site token with pages:read
 *   node scripts/webflow-export-page-dom.mjs <page_id> [output.json]
 *
 * Paginates automatically (limit 100) until all nodes are fetched.
 *
 * Docs: https://developers.webflow.com/data/reference/pages-and-components/pages/get-content
 */

import fs from "node:fs";
import path from "node:path";

const token = process.env.WEBFLOW_API_TOKEN || process.env.WEBFLOW_TOKEN;
const pageId = process.argv[2];
const outArg = process.argv[3];

if (!token || !pageId) {
  console.error(
    "Usage: WEBFLOW_API_TOKEN=... node scripts/webflow-export-page-dom.mjs <page_id> [output.json]"
  );
  process.exit(1);
}

const base = "https://api.webflow.com/v2/pages";
const limit = 100;
let offset = 0;
let allNodes = [];
let lastUpdated = null;
let pagination = null;

for (;;) {
  const url = new URL(`${base}/${pageId}/dom`);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("offset", String(offset));

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body.slice(0, 500)}`);
  }

  const data = await res.json();
  const nodes = data.nodes || [];
  allNodes = allNodes.concat(nodes);
  lastUpdated = data.lastUpdated ?? lastUpdated;
  pagination = data.pagination ?? pagination;

  const total = pagination?.total ?? allNodes.length;
  if (allNodes.length >= total || nodes.length === 0) break;
  offset += limit;
}

const payload = {
  pageId,
  lastUpdated,
  pagination: pagination
    ? { ...pagination, total: pagination.total ?? allNodes.length }
    : { limit, offset: 0, total: allNodes.length },
  nodes: allNodes,
};

const outPath =
  outArg ||
  path.join(
    "webflow-export",
    "agentspod-ai",
    "pages",
    `${pageId}-dom.json`
  );

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
console.log("Wrote", outPath, "nodes:", allNodes.length);
