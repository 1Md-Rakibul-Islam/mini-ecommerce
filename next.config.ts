import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
  experimental: {
    turbo: {},
  },
  reactStrictMode: true,
  output: "export",
};

module.exports = nextConfig;

