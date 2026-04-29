import type { NextApiRequest, NextApiResponse } from "next";
import { getCareersFormsManifest } from "@/lib/careers-forms-config";

/**
 * JSON manifest of careers Google Form URLs (from NEXT_PUBLIC_* env).
 * Useful for tooling, CMS sync, or verifying configuration without reading the client bundle.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json(getCareersFormsManifest());
}
