import Head from "next/head";
import { LandingPage } from "../components/landing/LandingPage";
export default function Landing() {
  const titlePrefix = "Agendspod.AI";
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
      </Head>
      <LandingPage />
    </>
  );
}
