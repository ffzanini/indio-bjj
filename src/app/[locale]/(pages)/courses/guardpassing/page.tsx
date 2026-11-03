import { CourseJsonLd } from "@/components/utils/CourseJsonLd";
import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import {
  loadLocaleGuardpassing,
  loadLocaleProfessor,
  loadLocaleUi,
} from "@/locales/load-locale";
import GuardpassingContent from "./GuardpassingContent";

type Props = { params: Promise<{ locale: string }> };

const keywords = `${DEFAULT_KEYWORDS_STRING}, curso passagens de guarda, passagens de guarda, guarda, jiu jitsu, dela riva, laço, 50/50, berimbolo`;

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/courses/guardpassing", "guardpassing", {
    keywords,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const [guardpassing, professor, ui] = await Promise.all([
    loadLocaleGuardpassing(locale),
    loadLocaleProfessor(locale),
    loadLocaleUi(locale),
  ]);

  return (
    <>
      <FacebookPixel />
      <CourseJsonLd
        name={ui.seo.guardpassing_title}
        description={ui.seo.guardpassing_description}
      />
      <TranslationsPatch patch={{ guardpassing, professor }}>
        <GuardpassingContent />
      </TranslationsPatch>
    </>
  );
}
