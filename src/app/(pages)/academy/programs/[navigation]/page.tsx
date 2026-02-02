import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProgramsDetailView from "./ProgramsDetailView";

import { DEFAULT_KEYWORDS_STRING, SITE_NAME, SITE_URL } from "@/constants/seo";

import { programs } from "@/app/data/programs";

interface PageProps {
  params: Promise<{
    navigation: string;
  }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    navigation: program.navigation,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const navigation = (await params).navigation;
  const program = programs.find((p) => p.navigation === navigation);
  if (!program) return { title: "Programa" };

  const title = `${program.title} - Jiu Jitsu Pelotas`;
  const shortDesc =
    program.description.length > 150
      ? `${program.description.slice(0, 147)}...`
      : program.description;
  const description = `${program.title} na JA Índio Jiu Jitsu em Pelotas. ${shortDesc}`;

  return {
    title,
    description,
    keywords: `${DEFAULT_KEYWORDS_STRING}, ${program.title.toLowerCase()}, programa jiu jitsu pelotas`,
    alternates: { canonical: `${SITE_URL}/academy/programs/${navigation}` },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/academy/programs/${navigation}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const navigation = (await params).navigation;
  const program = programs.find((p) => p.navigation === navigation);

  if (!program) notFound();

  return <ProgramsDetailView program={program} />;
}
