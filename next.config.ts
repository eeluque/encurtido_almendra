import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "placeimg.com", pathname: "/**" },
      { protocol: "https", hostname: "placeimg.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
