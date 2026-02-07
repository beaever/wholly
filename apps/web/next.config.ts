import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@wholly/bridge',
    '@wholly/core',
    '@wholly/types',
    '@wholly/ui-web',
  ],
};

export default nextConfig;
