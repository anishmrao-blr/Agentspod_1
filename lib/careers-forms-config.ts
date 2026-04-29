/**
 * Careers application URLs (Google Forms “Send” → link to fill out).
 *
 * The Google Forms REST API (`forms.googleapis.com/v1`) is for programmatically
 * reading/editing form *definitions* as the authenticated owner (OAuth 2.0).
 * Public applicant flows always use each form’s published response URL — set those
 * via NEXT_PUBLIC_* below. Optional `GET /api/google-forms/form?formId=` tries the
 * REST read with GOOGLE_FORMS_API_KEY (may 403 without OAuth depending on form).
 */

export type CareersFormsManifest = {
  version: 1;
  applicationFormUrl: string;
  roleFormUrls: Record<string, string>;
  capabilityFormUrls: Record<string, string>;
};

function firstNonEmpty(...candidates: Array<string | undefined>): string {
  for (const c of candidates) {
    const t = c?.trim();
    if (t) return t;
  }
  return "";
}

export function resolveCareersApplicationUrl(): string {
  return (
    firstNonEmpty(process.env.NEXT_PUBLIC_CAREERS_GOOGLE_FORM_URL, process.env.NEXT_PUBLIC_CAREERS_APPLICATION_FORM_URL) ||
    "/contact"
  );
}

function pick(specific: string | undefined, fallback: string): string {
  return firstNonEmpty(specific) || fallback;
}

export function getCareersFormsManifest(): CareersFormsManifest {
  const application = resolveCareersApplicationUrl();

  return {
    version: 1,
    applicationFormUrl: application,
    roleFormUrls: {
      "Senior Machine Learning Engineer": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_SENIOR_MLE, application),
      "AI Solutions Architect": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_ARCHITECT, application),
      "Frontend Engineer (React/Next.js)": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_FRONTEND, application),
      "Product Designer": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_DESIGNER, application)
    },
    capabilityFormUrls: {
      "Remote-first team": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_REMOTE_TEAM, application),
      "High-impact work": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_HIGH_IMPACT, application),
      "Cross-functional exposure": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_CROSS_FUNCTIONAL, application),
      "Open applications": pick(process.env.NEXT_PUBLIC_CAREERS_FORM_OPEN_APPLICATION, application)
    }
  };
}
