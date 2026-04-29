import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Optional passthrough to Google Forms API `forms.get`.
 * Requires `GOOGLE_FORMS_API_KEY` (Google Cloud API key with Forms API enabled).
 * Many forms return 403 unless the caller is the owner (OAuth) — use this for experiments only.
 *
 * GET /api/google-forms/form?formId=<id>
 * formId: raw form resource id (not the full docs.google.com URL).
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const formId = typeof req.query.formId === "string" ? req.query.formId : "";
  const key = process.env.GOOGLE_FORMS_API_KEY;

  if (!formId) {
    res.status(400).json({ error: "Missing formId query parameter." });
    return;
  }

  if (!key) {
    res.status(501).json({
      error:
        "GOOGLE_FORMS_API_KEY is not set. Applicant links should use NEXT_PUBLIC_CAREERS_* URLs; the REST API is mainly for form owners."
    });
    return;
  }

  const url = `https://forms.googleapis.com/v1/forms/${encodeURIComponent(formId)}?key=${encodeURIComponent(key)}`;
  const upstream = await fetch(url, { method: "GET", headers: { Accept: "application/json" } });
  const body = await upstream.json().catch(() => ({}));

  res.status(upstream.status).json(body);
}
