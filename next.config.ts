import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: { useTypeScriptCli: false },
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
