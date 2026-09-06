import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/lilin-guowen',
  assetPrefix: '/lilin-guowen/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
