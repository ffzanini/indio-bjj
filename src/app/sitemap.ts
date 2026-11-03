import type { MetadataRoute } from "next";

import { programs } from "@/app/data/programs";
import { SITE_URL } from "@/constants/seo";

const staticPaths = [
  "",
  "/contact",
  "/academy/programs",
  "/academy/schedules",
  "/academy/testimonials",
  "/courses/drills",
  "/courses/halfguard",
  "/courses/openguard",
  "/courses/nogi",
  "/courses/guardpassing",
];

const locales = ["pt", "en"] as const;

const buildAlternateLanguages = (path: string) => ({
  "pt-BR": `${SITE_URL}/pt${path}`,
  en: `${SITE_URL}/en${path}`,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages: buildAlternateLanguages(path) },
    })),
  );

  const programEntries: MetadataRoute.Sitemap = programs.flatMap((program) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/academy/programs/${program.navigation}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: buildAlternateLanguages(
          `/academy/programs/${program.navigation}`,
        ),
      },
    })),
  );

  const blackFridayEntry: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blackfriday`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...staticEntries, ...programEntries, ...blackFridayEntry];
}
