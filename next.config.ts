import type { NextConfig } from "next";
import path from "path";

const PROJECT_ROOT = path.resolve(__dirname);

const nextConfig: NextConfig = {
  // Turbopack detects the wrong workspace root because of a sibling
  // Agentspod_1/package-lock.json. Pin both the root and the @ alias
  // so module resolution always points to this project directory.
  turbopack: {
    root: PROJECT_ROOT,
    resolveAlias: {
      "@": PROJECT_ROOT,
    },
  },
  async redirects() {
    return [
      { source: "/gen-ai", destination: "/rag-knowledge", permanent: true },
      { source: "/data-science", destination: "/supply-chain-ai", permanent: true },
      { source: "/software-development", destination: "/ai-agents", permanent: true }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**"
      },
      {
        protocol: "https",
        hostname: "agentspod.ai",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.agentspod.ai",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
