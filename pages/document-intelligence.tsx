import Head from "next/head";
import { InternalContentPage } from "../components/landing/InternalContentPage";
import { internalPages } from "../components/landing/internalPages";

const page = internalPages["document-intelligence"];

export default function DocumentIntelligencePage() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta
          name="keywords"
          content="invoice processing automation AI, document intelligence, IDP, intelligent document processing, KYC automation, contract review AI, LLM extraction, OCR AI, BFSI compliance automation, document AI India"
        />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content="https://agentspod.ai/document-intelligence" />
        <link rel="canonical" href="https://agentspod.ai/document-intelligence" />
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
              url: "https://agentspod.ai/document-intelligence",
            }),
          }}
        />
      </Head>
      <InternalContentPage page={page} />
    </>
  );
}
