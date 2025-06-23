/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://indiobjj.com.br/",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/"),
      await config.transform(config, "/academy/about-us"),
      await config.transform(config, "/academy/programs"),
      await config.transform(config, "/academy/schedules"),
      await config.transform(config, "/contact"),
      await config.transform(config, "/courses/halfguard"),
      await config.transform(config, "/courses/openguard"),
    ];
  },
};

module.exports = config;
