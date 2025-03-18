// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: outputDir,
  reactStrictMode: true,
  output: 'export', 
  trailingSlash: true, 
  basePath: '/mamindlasathwika.io',
  assetPrefix: '/mamindlasathwika.io/',
  images: {
    unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: !isProduction,
};

module.exports = nextConfig;