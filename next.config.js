const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/apps/smart-calculator",
        destination: "/apps/smart-calculator/index.html",
      },
      {
        source: "/apps/smart-calculator/",
        destination: "/apps/smart-calculator/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
