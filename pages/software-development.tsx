import Head from "next/head";
import { InternalContentPage } from "@/components/landing/InternalContentPage";
import { internalPages } from "@/components/landing/internalPages";

const page = internalPages["software-development"];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content="https://agentspod.ai/software-development" />
        <link rel="canonical" href="https://agentspod.ai/software-development" />
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
              url: "https://agentspod.ai/software-development",
            }),
          }}
        />
      </Head>
      <InternalContentPage page={page} />
    </>
  );
}
