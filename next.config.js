// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: outputDir,
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
        position: "top-right",
    },
    experimental: {},
    productionBrowserSourceMaps: isProduction,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
        ],
    },
    pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

module.exports = nextConfig;