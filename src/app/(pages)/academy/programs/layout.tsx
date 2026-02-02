import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Programas";
const description =
  "Programas de Jiu Jitsu da JA Índio em Pelotas: iniciante, intermediário, avançado, competição, baby/kids, feminino, nogi, executivo e aulas particulares. Escolha seu programa na melhor academia de Jiu Jitsu em Pelotas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: DEFAULT_KEYWORDS_STRING,
  alternates: { canonical: `${SITE_URL}/academy/programs` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/academy/programs`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
