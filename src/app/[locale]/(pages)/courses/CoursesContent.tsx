"use client";
import { LocaleLink as Link } from "@/components/utils/LocaleLink";
import { useTranslation } from "@/context";

export default function Courses() {
  const { translations: t } = useTranslation();
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-background text-foreground">
      <p>{t.courses.pageNotFound}</p>
      <Link href="/" className="text-foreground">
        {t.courses.backHome}
      </Link>
    </div>
  );
}
