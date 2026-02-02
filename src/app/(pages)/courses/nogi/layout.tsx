import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Curso Jiu Jitsu No-Gi com Fabiano Índio";
const description =
  "Curso de Jiu Jitsu nogi (no-gi, sem kimono) com Fabiano Índio. Aprenda nogi na JA Índio em Pelotas. Técnicas de grappling e MMA. Curso nogi Pelotas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: `${DEFAULT_KEYWORDS_STRING}, curso nogi, curso no-gi, nogi, no-gi, jiu jitsu sem kimono, grappling, curso nogi pelotas`,
  alternates: { canonical: `${SITE_URL}/courses/nogi` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/courses/nogi`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
