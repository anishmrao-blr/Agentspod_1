import type { GetServerSideProps } from "next";

/**
 * Legacy URL — canonical content lives on /ai-agents.
 */
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/ai-agents", permanent: true }
});

export default function GenAiLegacyRedirect() {
  return null;
}
