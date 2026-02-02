/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://indiobjj.com.br/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: [
    "/opengraph-image*",
    "/twitter-image*",
    "/apple-icon*",
    "/manifest.json",
    "/favicon.ico",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => {
    const transform = config.transform;
    return [
      { ...(await transform(config, "/")), priority: 1, changefreq: "weekly" },
      {
        ...(await transform(config, "/academy/about-us")),
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/academy/programs")),
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/academy/schedules")),
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/academy/testimonials")),
        priority: 0.8,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/contact")),
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/courses")),
        priority: 0.9,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/courses/halfguard")),
        priority: 0.8,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/courses/openguard")),
        priority: 0.8,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/courses/nogi")),
        priority: 0.8,
        changefreq: "monthly",
      },
      {
        ...(await transform(config, "/courses/drills")),
        priority: 0.8,
        changefreq: "monthly",
      },
    ];
  },
};

module.exports = config;
