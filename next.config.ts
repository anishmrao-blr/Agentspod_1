import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
