// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/mamindlasathwika.io",
  assetPrefix: "/mamindlasathwika.io/",
  distDir: outputDir,
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  experimental: {
    // appDir: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/22r01a0534/mamindlasathwika.io/main/public/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
