import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static site
  trailingSlash: true, // Ensures URLs work on GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // swcMinify: true, // Recommended for faster minification with Webpack
  reactStrictMode: true, // Recommended for better React debugging
};

export default nextConfig;
