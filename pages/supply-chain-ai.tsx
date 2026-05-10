import Head from "next/head";
import { InternalContentPage } from "../components/landing/InternalContentPage";
import { internalPages } from "../components/landing/internalPages";

const page = internalPages["supply-chain-ai"];

export default function SupplyChainAIPage() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta
          name="keywords"
          content="AI supply chain optimization, demand forecasting AI, computer vision quality control, FMCG AI India, dispatch optimization AI, inventory optimization AI, supply chain automation, warehouse AI, ERP AI integration"
        />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content="https://agentspod.ai/supply-chain-ai" />
        <link rel="canonical" href="https://agentspod.ai/supply-chain-ai" />
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
              url: "https://agentspod.ai/supply-chain-ai",
            }),
          }}
        />
      </Head>
      <InternalContentPage page={page} />
    </>
  );
}
