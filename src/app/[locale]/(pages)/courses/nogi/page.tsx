import { CourseJsonLd } from "@/components/utils/CourseJsonLd";
import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import {
  loadLocaleNogi,
  loadLocaleProfessor,
  loadLocaleUi,
} from "@/locales/load-locale";
import NogiContent from "./NogiContent";

type Props = { params: Promise<{ locale: string }> };

const keywords = `${DEFAULT_KEYWORDS_STRING}, curso nogi, curso no-gi, nogi, no-gi, jiu jitsu sem kimono, grappling, curso nogi pelotas`;

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/courses/nogi", "nogi", { keywords });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const [nogi, professor, ui] = await Promise.all([
    loadLocaleNogi(locale),
    loadLocaleProfessor(locale),
    loadLocaleUi(locale),
  ]);

  return (
    <>
      <FacebookPixel />
      <CourseJsonLd name={ui.seo.nogi_title} description={ui.seo.nogi_description} />
      <TranslationsPatch patch={{ nogi, professor }}>
        <NogiContent />
      </TranslationsPatch>
    </>
  );
}
