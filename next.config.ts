import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
  experimental: {
    turbo: {},
  },
};

export default nextConfig;
