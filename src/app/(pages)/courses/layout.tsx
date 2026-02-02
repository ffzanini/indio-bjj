import type { Metadata } from "next";

import {
  COURSES_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Cursos de Jiu Jitsu";
const description =
  "Cursos de Jiu Jitsu com Fabiano Índio na JA Pelotas: curso meia guarda, curso guarda aberta, curso nogi (no-gi) e curso drills. Aprenda Jiu Jitsu com o Índio em Pelotas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: COURSES_KEYWORDS_STRING,
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/courses`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
