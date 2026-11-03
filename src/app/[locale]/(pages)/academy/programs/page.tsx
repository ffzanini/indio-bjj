import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocalePrograms } from "@/locales/load-locale";
import ProgramsContent from "./ProgramsContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/academy/programs", "programs", {
    keywords: DEFAULT_KEYWORDS_STRING,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const programs = await loadLocalePrograms(locale);

  return (
    <TranslationsPatch patch={{ programs }}>
      <ProgramsContent />
    </TranslationsPatch>
  );
}
