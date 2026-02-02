import type { Metadata } from "next";

import {
  DEFAULT_KEYWORDS_STRING,
  SITE_NAME,
  SITE_URL,
} from "@/constants/seo";

const title = "Horários";
const description =
  "Horários das aulas de Jiu Jitsu da JA Índio em Pelotas. Confira os dias e horários dos treinos de Jiu Jitsu, nogi e programas especiais na academia Índio Jiu Jitsu Pelotas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: DEFAULT_KEYWORDS_STRING,
  alternates: { canonical: `${SITE_URL}/academy/schedules` },
  openGraph: {
    title: `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
    description,
    url: `${SITE_URL}/academy/schedules`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
