import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Depoimentos";
const description =
  "Depoimentos de alunos da JA Índio Jiu Jitsu em Pelotas. Veja o que alunos e alunas falam sobre treinar Jiu Jitsu na academia Índio em Pelotas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: DEFAULT_KEYWORDS_STRING,
  alternates: { canonical: `${SITE_URL}/academy/testimonials` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/academy/testimonials`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
