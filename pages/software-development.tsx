import type { GetServerSideProps } from "next";

/**
 * Legacy URL — delivery stories and engineering scope are under /projects.
 */
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: "/projects", permanent: true }
});

export default function SoftwareDevelopmentLegacyRedirect() {
  return null;
}
