"use client";
import Link from "next/link";
import { useTranslation } from "@/context";

export default function AboutUs() {
  const { translations: t } = useTranslation();
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-background text-foreground">
      <p>{t.about.pageUnderConstruction}</p>
      <Link href="/" className="text-foreground">
        {t.about.backHome}
      </Link>
    </div>
  );
}
