import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { COURSES_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocaleCourses } from "@/locales/load-locale";
import CoursesContent from "./CoursesContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/courses", "courses", {
    keywords: COURSES_KEYWORDS_STRING,
    noindex: true,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const courses = await loadLocaleCourses(locale);

  return (
    <TranslationsPatch patch={{ courses }}>
      <CoursesContent />
    </TranslationsPatch>
  );
}
