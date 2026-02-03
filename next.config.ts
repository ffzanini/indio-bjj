import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cache de 31 dias reduz retransformações e Edge/Image Optimization (Vercel)
    minimumCacheTTL: 2678400,
    // Um único formato reduz variações e custo de Image Optimization
    formats: ["image/webp"],
  },
};

export default nextConfig;
