import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Quem Somos";
const description =
  "Conheça a JA Índio Jiu Jitsu em Pelotas. História do Índio Jiu Jitsu, professores e metodologia. Academia de Jiu Jitsu em Pelotas com tradição e qualidade.";

export const metadata: Metadata = {
  title,
  description,
  keywords: DEFAULT_KEYWORDS_STRING,
  alternates: { canonical: `${SITE_URL}/academy/about-us` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/academy/about-us`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
