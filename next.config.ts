import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co.com','ibb.co.com', 'www.w3.org', 'i.ibb.co'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
