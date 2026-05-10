import Head from "next/head";
import { InternalContentPage } from "../components/landing/InternalContentPage";
import { internalPages } from "../components/landing/internalPages";

const page = internalPages["dpdp-compliance"];

export default function DPDPCompliancePage() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta
          name="keywords"
          content="DPDP compliance AI, DPDP Act India, Digital Personal Data Protection, PII detection, consent management AI, data residency India, AI compliance India, DPDP enforcement 2026, data governance AI"
        />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content="https://agentspod.ai/dpdp-compliance" />
        <link rel="canonical" href="https://agentspod.ai/dpdp-compliance" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: page.heroHeading,
              description: page.description,
              provider: {
                "@type": "Organization",
                name: "Agentspod.AI",
                url: "https://agentspod.ai",
              },
              url: "https://agentspod.ai/dpdp-compliance",
            }),
          }}
        />
      </Head>
      <InternalContentPage page={page} />
    </>
  );
}
