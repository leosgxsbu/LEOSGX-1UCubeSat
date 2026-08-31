import type { NextConfig } from "next";
import { PAGES_BASE_PATH } from "./site.config";

/**
 * GitHub Pages project site lives at:
 * https://leosgxsbu.github.io/Psi_Sat-1U-CubeSat-/
 *
 * Locally (`npm run dev`) basePath stays empty.
 * Production builds use the repo name as the Pages path.
 */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? PAGES_BASE_PATH : "";

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
