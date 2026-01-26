export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/"],
    },
    sitemap: "https://jptherapystudios.com/sitemap.xml",
  };
}