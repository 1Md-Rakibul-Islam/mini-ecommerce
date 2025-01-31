import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
    unoptimized: true,
  },
  experimental: {
    turbo: {},
  },
  distDir: 'dist',
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;