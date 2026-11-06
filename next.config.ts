import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.instagram.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://i.ytimg.com https://img.youtube.com https://*.cdninstagram.com https://www.instagram.com https://maps.gstatic.com https://maps.googleapis.com https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net https://graph.facebook.com https://www.instagram.com https://brasilapi.com.br https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com https://www.instagram.com https://www.googletagmanager.com https://www.facebook.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  compress: true,
  deploymentId: process.env.VERCEL_DEPLOYMENT_ID,

  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
      "country-flag-icons",
    ],
  },

  async redirects() {
    return [
      { source: "/pt/blackfriday", destination: "/blackfriday", permanent: true },
      { source: "/en/blackfriday", destination: "/blackfriday", permanent: true },
      { source: "/obrigado", destination: "/blackfriday/obrigado", permanent: true },
      { source: "/pt/obrigado", destination: "/blackfriday/obrigado", permanent: true },
      { source: "/en/obrigado", destination: "/blackfriday/obrigado", permanent: true },
      { source: "/contact", destination: "/pt/contact", permanent: true },
      { source: "/courses", destination: "/pt/courses", permanent: true },
      {
        source: "/courses/:slug",
        destination: "/pt/courses/:slug",
        permanent: true,
      },
      {
        source: "/academy/about-us",
        destination: "/pt/academy/about-us",
        permanent: true,
      },
      {
        source: "/academy/programs",
        destination: "/pt/academy/programs",
        permanent: true,
      },
      {
        source: "/academy/programs/:navigation",
        destination: "/pt/academy/programs/:navigation",
        permanent: true,
      },
      {
        source: "/academy/schedules",
        destination: "/pt/academy/schedules",
        permanent: true,
      },
      {
        source: "/academy/testimonials",
        destination: "/pt/academy/testimonials",
        permanent: true,
      },
    ];
  },

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY },
        ],
      },
      {
        source: "/:locale(pt|en)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:locale(pt|en)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/images/:rest*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:rest*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
