import Head from "next/head";
import { LandingPage } from "../components/landing/LandingPage";
export default function Landing() {
  const titlePrefix = "Agentspod.AI";
  const description =
    "The technical partner for ambitious founders and forward-thinking enterprises. We build the AI systems that power the future.";

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
          content="AI development, artificial intelligence, machine learning, AI agents, generative AI, data science, custom software development, AI consulting, voice AI, natural language processing, AI solutions"
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
