import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Contato";
const description =
  "Entre em contato com a JA Índio Jiu Jitsu em Pelotas. Agende sua aula experimental de Jiu Jitsu. WhatsApp, endereço e horários da academia de Jiu Jitsu em Pelotas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: DEFAULT_KEYWORDS_STRING,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/contact`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
