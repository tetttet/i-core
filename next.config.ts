import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "localhost"],
};

export default nextConfig;
