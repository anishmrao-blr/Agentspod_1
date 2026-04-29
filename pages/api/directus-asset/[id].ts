import type { NextApiRequest, NextApiResponse } from "next";

const DIRECTUS_BASE_URL = process.env.DIRECTUS_URL ?? "http://127.0.0.1:8055";
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const fileId = Array.isArray(id) ? id[0] : id;

  if (!fileId) {
    res.status(400).json({ error: "Missing asset id" });
    return;
  }

  const upstreamUrl = `${DIRECTUS_BASE_URL}/assets/${encodeURIComponent(fileId)}`;
  const headers: Record<string, string> = {};

  if (DIRECTUS_TOKEN) {
    headers.Authorization = `Bearer ${DIRECTUS_TOKEN}`;
  }

  try {
    const upstream = await fetch(upstreamUrl, { headers, cache: "no-store" });

    if (!upstream.ok || !upstream.body) {
      res.status(upstream.status || 502).json({ error: "Failed to fetch Directus asset" });
      return;
    }

    const contentType = upstream.headers.get("content-type");
    const cacheControl = upstream.headers.get("cache-control");
    const contentLength = upstream.headers.get("content-length");

    if (contentType) res.setHeader("Content-Type", contentType);
    if (cacheControl) res.setHeader("Cache-Control", cacheControl);
    if (contentLength) res.setHeader("Content-Length", contentLength);

    const buffer = Buffer.from(await upstream.arrayBuffer());
    res.status(200).send(buffer);
  } catch {
    res.status(502).json({ error: "Unable to proxy Directus asset" });
  }
}
