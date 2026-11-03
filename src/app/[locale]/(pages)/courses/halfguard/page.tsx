import { CourseJsonLd } from "@/components/utils/CourseJsonLd";
import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import {
  loadLocaleHalfguard,
  loadLocaleProfessor,
  loadLocaleUi,
} from "@/locales/load-locale";
import HalfguardContent from "./HalfguardContent";

type Props = { params: Promise<{ locale: string }> };

const keywords = `${DEFAULT_KEYWORDS_STRING}, curso meia guarda, meia guarda, half guard, curso jiu jitsu meia guarda`;

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/courses/halfguard", "halfguard", { keywords });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const [halfguard, professor, ui] = await Promise.all([
    loadLocaleHalfguard(locale),
    loadLocaleProfessor(locale),
    loadLocaleUi(locale),
  ]);

  return (
    <>
      <FacebookPixel />
      <CourseJsonLd
        name={ui.seo.halfguard_title}
        description={ui.seo.halfguard_description}
      />
      <TranslationsPatch patch={{ halfguard, professor }}>
        <HalfguardContent />
      </TranslationsPatch>
    </>
  );
}
