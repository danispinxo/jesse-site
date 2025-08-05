const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.jptherapystudios.com",
          },
        ],
        destination: "https://jptherapystudios.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://jptherapystudios.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
