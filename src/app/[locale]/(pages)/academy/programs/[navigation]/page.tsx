import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { isValidLocale } from "@/libs/i18n";
import { buildPageMetadata, fillTemplate } from "@/libs/page-metadata";
import { programs } from "@/app/data/programs";
import { loadLocaleUi, loadProgramPage } from "@/locales/load-locale";
import ProgramsDetailView from "./ProgramsDetailView";

interface PageProps {
  params: Promise<{
    locale: string;
    navigation: string;
  }>;
}

export function generateStaticParams() {
  return programs.map((program) => ({
    navigation: program.navigation,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, navigation } = await params;
  if (!isValidLocale(raw)) return {};
  const loaded = await loadProgramPage(raw, navigation);
  if (!loaded) return { title: "Programa" };

  const ui = await loadLocaleUi(raw);
  const detail = loaded.programsDetail.programs.find(
    (item) => item.id === loaded.program.id,
  );
  const titleText = detail?.title ?? loaded.program.title;
  const summarySource = detail?.description ?? "";
  const summary =
    summarySource.length > 150
      ? `${summarySource.slice(0, 147)}...`
      : summarySource;
  const title = `${titleText} - Jiu Jitsu Pelotas`;
  const description = fillTemplate(ui.seo.program_description, {
    title: titleText,
    summary,
  });

  return buildPageMetadata({
    locale: raw,
    path: `/academy/programs/${navigation}`,
    title,
    description,
    keywords: `${DEFAULT_KEYWORDS_STRING}, ${titleText.toLowerCase()}, programa jiu jitsu pelotas`,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale: raw, navigation } = await params;
  if (!isValidLocale(raw)) notFound();

  const loaded = await loadProgramPage(raw, navigation);
  if (!loaded) notFound();

  return (
    <TranslationsPatch patch={{ programsDetail: loaded.programsDetail }}>
      <ProgramsDetailView
        program={loaded.program}
        nextPrograms={loaded.nextPrograms}
      />
    </TranslationsPatch>
  );
}
