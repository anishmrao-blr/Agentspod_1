import Head from "next/head";
import { InternalContentPage } from "../components/landing/InternalContentPage";
import { internalPages } from "../components/landing/internalPages";

const page = internalPages["rag-knowledge"];

export default function RAGKnowledgePage() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta
          name="keywords"
          content="RAG implementation, retrieval augmented generation, enterprise search AI, vector database, Pinecone, Weaviate, knowledge management AI, private data search, document AI, RAG pilot India"
        />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content="https://agentspod.ai/rag-knowledge" />
        <link rel="canonical" href="https://agentspod.ai/rag-knowledge" />
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
              url: "https://agentspod.ai/rag-knowledge",
            }),
          }}
        />
      </Head>
      <InternalContentPage page={page} />
    </>
  );
}
