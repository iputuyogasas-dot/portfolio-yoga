import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/portfolio-yoga',
  images: {
    // Allow SVG files served as static assets
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Placeholder images configuration
    unoptimized: true,
  },
};

export default nextConfig;
