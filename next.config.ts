import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: isProduction ? '/portfolio' : '',
  basePath: isProduction ? '/portfolio' : '',
};

export default nextConfig;
