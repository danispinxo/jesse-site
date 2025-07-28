/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better bundle optimization
  experimental: {
    optimizeCss: true,
  },

  // Bundle analyzer and tree shaking optimizations
  webpack: (config, { dev, isServer }) => {
    // Improve tree shaking
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;

    // Only include necessary polyfills
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Compression and performance optimizations
  compress: true,
  poweredByHeader: false,

  // Remove unused CSS and JS
  swcMinify: true,
};

export default nextConfig;
