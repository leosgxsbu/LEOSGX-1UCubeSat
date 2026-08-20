import type { NextConfig } from "next";

/**
 * GitHub Pages project site lives at:
 * https://leosgxsbu.github.io/LEOSGX-1UCubeSat/
 *
 * Locally (`npm run dev`) basePath stays empty.
 * Production builds use /LEOSGX-1UCubeSat.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/LEOSGX-1UCubeSat" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
