import { Html, Head, Main, NextScript } from "next/document";

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Agentspod.AI" />
        <meta property="og:image" content="https://agentspod.ai/logos/ai-official/agentspod-ai.png" />
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
        {LINKEDIN_PARTNER_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
            />
          </noscript>
        )}
      </body>
    </Html>
  );
}
