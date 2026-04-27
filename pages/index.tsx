import Head from "next/head";
import { LandingPage } from "../components/landing/LandingPage";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Agendspod.AI | Engineering Intelligence</title>
        <meta
          name="description"
          content="The technical partner for ambitious founders and forward-thinking enterprises. We build the AI systems that power the future."
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
