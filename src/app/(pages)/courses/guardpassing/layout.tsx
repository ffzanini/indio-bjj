import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Curso Passagens de Guarda com Fabiano Índio";
const description =
  "Curso de passagens de guarda com Fabiano Índio. Aprenda controle por cima, pressão eficiente e técnicas para passar guardas modernas no Jiu Jitsu.";

export const metadata: Metadata = {
  title,
  description,
  keywords: `${DEFAULT_KEYWORDS_STRING}, curso passagens de guarda, passagens de guarda, guarda, jiu jitsu, dela riva, laço, 50/50, berimbolo`,
  alternates: { canonical: `${SITE_URL}/courses/guardpassing` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/courses/guardpassing`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
