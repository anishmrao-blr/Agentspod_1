import Head from "next/head";
import { InternalContentPage } from "@/components/landing/InternalContentPage";
import { internalPages } from "@/components/landing/internalPages";

const page = internalPages["voice-ai"];

export default function VoiceAIPage() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content="https://agentspod.ai/voice-ai" />
        <link rel="canonical" href="https://agentspod.ai/voice-ai" />
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
              url: "https://agentspod.ai/voice-ai",
            }),
          }}
        />
      </Head>
      <InternalContentPage page={page} />
    </>
  );
}
