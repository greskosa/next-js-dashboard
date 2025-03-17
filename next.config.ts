import type { NextConfig } from 'next';
const a= 1;

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;
