import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Curso Drills de Jiu Jitsu com Fabiano Índio";
const description =
  "Curso de drills de Jiu Jitsu com Fabiano Índio. Aprenda repetição e fundamentos na JA Índio em Pelotas. Curso drills para melhorar técnica e condicionamento no Jiu Jitsu.";

export const metadata: Metadata = {
  title,
  description,
  keywords: `${DEFAULT_KEYWORDS_STRING}, curso drills jiu jitsu, drills jiu jitsu, curso drills, fundamentos jiu jitsu, repetição`,
  alternates: { canonical: `${SITE_URL}/courses/drills` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/courses/drills`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
