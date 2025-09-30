import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  output: 'standalone', 
  experimental: {
    optimizeCss: false,
  }
};

export default nextConfig;
