import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_FILE = path.join(ROOT, "docs/references/stellarmind-case-studies-firecrawl-mcp-complete.md");
const ENV_FILE = path.join(ROOT, ".env.local");

function loadEnvFromFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf8");
  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const splitIndex = line.indexOf("=");
    if (splitIndex <= 0) continue;
    const key = line.slice(0, splitIndex).trim();
    const value = line.slice(splitIndex + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

function stripNumberedHeading(heading) {
  return heading.replace(/^\d+\.\s*/, "").trim();
}

function parseCaseStudies(markdown) {
  const blocks = markdown.split(/\n(?=###\s+\d+\.\s+)/g).filter((chunk) => /^###\s+\d+\.\s+/m.test(chunk));
  const items = [];

  for (const block of blocks) {
    const titleMatch = block.match(/^###\s+\d+\.\s+(.+)$/m);
    if (!titleMatch) continue;
    const title = stripNumberedHeading(titleMatch[1]).replace(/\\\|/g, "|").trim();

    const tagsMatch = block.match(/^- Tags:\s*(.+)$/m);
    const summaryMatch = block.match(/^- Summary:\s*(.+)$/m);
    const detailPageMatch = block.match(/^- Detail page:\s*(.+)$/m);

    const category = tagsMatch?.[1]?.split(",")[0]?.trim() || "Other";

    const sections = {
      overview: "",
      technology_stack: "",
      key_challenges: "",
      solutions: "",
      benefits_delivered: "",
      conclusion_highlights: ""
    };

    const sectionMap = [
      ["Overview", "overview"],
      ["Technology Stack", "technology_stack"],
      ["Key Challenges", "key_challenges"],
      ["Solutions", "solutions"],
      ["Benefits Delivered", "benefits_delivered"],
      ["Conclusion Highlights", "conclusion_highlights"]
    ];

    for (let i = 0; i < sectionMap.length; i++) {
      const [heading, key] = sectionMap[i];
      const nextHeading = sectionMap[i + 1]?.[0];
      const regex = nextHeading
        ? new RegExp(`\\*\\*${heading}\\*\\*[\\s\\S]*?(?=\\n\\*\\*${nextHeading}\\*\\*)`, "m")
        : new RegExp(`\\*\\*${heading}\\*\\*[\\s\\S]*$`, "m");
      const match = block.match(regex);
      if (!match) continue;
      const cleaned = match[0]
        .replace(new RegExp(`\\*\\*${heading}\\*\\*`, "g"), "")
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join("\n");
      sections[key] = cleaned;
    }

    items.push({
      page_slug: "projects",
      status: "published",
      sort: items.length + 1,
      title,
      category,
      tags: tagsMatch?.[1]?.trim() ?? "",
      summary: summaryMatch?.[1]?.trim() ?? "",
      detail_page: detailPageMatch?.[1]?.trim() ?? null,
      ...sections
    });
  }

  return items;
}

async function request(pathname, init = {}) {
  const baseUrl = process.env.DIRECTUS_URL || "http://127.0.0.1:8055";
  const token = process.env.DIRECTUS_TOKEN;
  const headers = { "Content-Type": "application/json", ...(init.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${baseUrl}${pathname}`, { ...init, headers });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`${init.method || "GET"} ${pathname} failed: ${response.status} ${errorText}`);
  }
  return response.json();
}

async function upsertCaseStudies(items) {
  const existing = await request("/items/case_studies?fields=id,title&page_slug&filter[page_slug][_eq]=projects&limit=-1");
  const existingByTitle = new Map((existing.data || []).map((item) => [item.title, item.id]));

  for (const item of items) {
    const id = existingByTitle.get(item.title);
    if (id) {
      await request(`/items/case_studies/${id}`, { method: "PATCH", body: JSON.stringify(item) });
    } else {
      await request("/items/case_studies", { method: "POST", body: JSON.stringify(item) });
    }
  }
}

async function main() {
  loadEnvFromFile(ENV_FILE);
  const markdown = fs.readFileSync(SOURCE_FILE, "utf8");
  const items = parseCaseStudies(markdown);
  if (!items.length) throw new Error("No case studies parsed from markdown.");
  await upsertCaseStudies(items);
  console.log(`Synced ${items.length} case studies to Directus collection case_studies.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
