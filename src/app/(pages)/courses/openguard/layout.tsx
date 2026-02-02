import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Curso Guarda Aberta com Fabiano Índio";
const description =
  "Curso de guarda aberta (open guard) com Fabiano Índio. Aprenda técnicas de guarda aberta no Jiu Jitsu na JA Índio em Pelotas. Curso de Jiu Jitsu para todos os níveis.";

export const metadata: Metadata = {
  title,
  description,
  keywords: `${DEFAULT_KEYWORDS_STRING}, curso guarda aberta, guarda aberta, open guard, curso jiu jitsu guarda aberta`,
  alternates: { canonical: `${SITE_URL}/courses/openguard` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/courses/openguard`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
