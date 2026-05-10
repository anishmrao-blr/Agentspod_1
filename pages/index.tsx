import Head from "next/head";
import { LandingPage } from "../components/landing/LandingPage";
export default function Landing() {
  const titlePrefix = "Agentspod.AI";
  const description =
    "Agentspod embeds engineers to ship AI in production—agent platforms, voice, document intelligence, DPDP compliance, supply-chain systems, and RAG—for founders and enterprises across India, Australia, and Singapore.";

  return (
    <>
      <Head>
        <title>{`${titlePrefix} | Engineering Intelligence`}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content="agentic workflow automation, voice AI agent, invoice processing automation AI, DPDP compliance AI, AI supply chain optimization, RAG implementation, LangGraph development, AI agents India, enterprise AI Australia Singapore, document intelligence BFSI"
        />
        <meta property="og:title" content={`${titlePrefix} | Engineering Intelligence`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://agentspod.ai" />
        <link rel="canonical" href="https://agentspod.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Agentspod.AI",
              url: "https://agentspod.ai",
              logo: "https://agentspod.ai/logos/ai-official/agentspod-ai.png",
              description,
              contactPoint: {
                "@type": "ContactPoint",
                url: "https://agentspod.ai/contact",
                contactType: "customer service",
              },
              sameAs: [],
            }),
          }}
        />
      </Head>
      <LandingPage />
    </>
  );
}
