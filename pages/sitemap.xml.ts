import type { GetServerSideProps } from "next";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://agentspod.ai").replace(/\/+$/, "");

const staticPaths = [
  "/",
  "/about",
  "/projects",
  "/contact",
  "/careers",
  "/qualify",
  "/privacy",
  "/terms",
  "/ai-agents",
  "/voice-ai",
  "/document-intelligence",
  "/dpdp-compliance",
  "/supply-chain-ai",
  "/rag-knowledge",
];

function buildSitemapXml(urls: Array<{ loc: string; lastmod?: string }>) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(({ loc, lastmod }) => {
        const full = `${SITE_URL}${loc}`;
        const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : "";
        return `  <url>\n    <loc>${escapeXml(full)}</loc>${lastmodTag}\n  </url>`;
      })
      .join("\n") +
    `\n</urlset>\n`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const now = new Date().toISOString();
  const xml = buildSitemapXml(staticPaths.map((loc) => ({ loc, lastmod: now })));

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function SitemapXml() {
  return null;
}

