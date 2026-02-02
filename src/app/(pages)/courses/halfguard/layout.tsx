import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Curso Meia Guarda com Fabiano Índio";
const description =
  "Curso de meia guarda (half guard) com Fabiano Índio. Aprenda técnicas de meia guarda no Jiu Jitsu na JA Índio em Pelotas. Curso de Jiu Jitsu para todos os níveis.";

export const metadata: Metadata = {
  title,
  description,
  keywords: `${DEFAULT_KEYWORDS_STRING}, curso meia guarda, meia guarda, half guard, curso jiu jitsu meia guarda`,
  alternates: { canonical: `${SITE_URL}/courses/halfguard` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/courses/halfguard`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
