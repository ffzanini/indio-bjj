import { CourseJsonLd } from "@/components/utils/CourseJsonLd";
import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import {
  loadLocaleDrills,
  loadLocaleProfessor,
  loadLocaleUi,
} from "@/locales/load-locale";
import DrillsContent from "./DrillsContent";

type Props = { params: Promise<{ locale: string }> };

const keywords = `${DEFAULT_KEYWORDS_STRING}, curso drills jiu jitsu, drills jiu jitsu, curso drills, fundamentos jiu jitsu, repetição`;

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/courses/drills", "drills", { keywords });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const [drills, professor, ui] = await Promise.all([
    loadLocaleDrills(locale),
    loadLocaleProfessor(locale),
    loadLocaleUi(locale),
  ]);

  return (
    <>
      <FacebookPixel />
      <CourseJsonLd
        name={ui.seo.drills_title}
        description={ui.seo.drills_description}
      />
      <TranslationsPatch patch={{ drills, professor }}>
        <DrillsContent />
      </TranslationsPatch>
    </>
  );
}
