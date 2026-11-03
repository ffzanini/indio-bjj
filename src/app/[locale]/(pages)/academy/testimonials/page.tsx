import { TranslationsPatch } from "@/components/utils/TranslationsPatch";
import { DEFAULT_KEYWORDS_STRING } from "@/constants/seo";
import { metadataFromUi, readLocale } from "@/libs/locale-page";
import { loadLocaleTestimonials } from "@/locales/load-locale";
import TestimonialsContent from "./TestimonialsContent";

type Props = { params: Promise<{ locale: string }> };

export function generateMetadata({ params }: Props) {
  return metadataFromUi(params, "/academy/testimonials", "testimonials", {
    keywords: DEFAULT_KEYWORDS_STRING,
  });
}

export default async function Page({ params }: Readonly<Props>) {
  const locale = await readLocale(params);
  const testimonials = await loadLocaleTestimonials(locale);

  return (
    <TranslationsPatch patch={{ testimonials }}>
      <TestimonialsContent />
    </TranslationsPatch>
  );
}
