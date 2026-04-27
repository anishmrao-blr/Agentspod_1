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
        hostname: "sevensenseai.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.sevensenseai.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
