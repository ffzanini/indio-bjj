import { CourseJsonLd } from "@/components/utils/CourseJsonLd";
import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import {
  loadLocaleOpenguard,
  loadLocaleProfessor,
  loadLocaleUi,
} from "@/locales/load-locale";
import OpenguardContent from "./OpenguardContent";

type Props = { params: Promise<{ locale: string }> };

const keywords = `${DEFAULT_KEYWORDS_STRING}, curso guarda aberta, guarda aberta, open guard, curso jiu jitsu guarda aberta`;

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/courses/openguard", "openguard", { keywords });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const [openguard, professor, ui] = await Promise.all([
    loadLocaleOpenguard(locale),
    loadLocaleProfessor(locale),
    loadLocaleUi(locale),
  ]);

  return (
    <>
      <FacebookPixel />
      <CourseJsonLd
        name={ui.seo.openguard_title}
        description={ui.seo.openguard_description}
      />
      <TranslationsPatch patch={{ openguard, professor }}>
        <OpenguardContent />
      </TranslationsPatch>
    </>
  );
}
