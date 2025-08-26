import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  // --
  // for github pages
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  // --
};

export default nextConfig;
