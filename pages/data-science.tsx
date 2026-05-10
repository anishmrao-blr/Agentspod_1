import type { GetServerSideProps } from "next";

/**
 * Legacy URL — portfolio and ML/data work is consolidated under /projects.
 */
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/projects", permanent: true }
});

export default function DataScienceLegacyRedirect() {
  return null;
}
