import type { Metadata } from "next";
import Image from "next/image";

import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { SITE_NAME, SITE_URL } from "@/constants/seo";

import { ThankYou } from "./ThankYou";

const title = "Inscrição confirmada | Ultra Black";
const description =
  "Sua inscrição na Ultra Black está confirmada. Entre no grupo VIP do WhatsApp.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/blackfriday/obrigado` },
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-10 text-white-theme">
      <Image
        src="/images/profile/sales.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-black/75" />
      <FacebookPixel />
      <div className="relative z-10 flex w-full min-w-[min(100%,42rem)] max-w-3xl flex-col items-center">
        <Image
          src="/images/logos/logo.png"
          alt={`${SITE_NAME}, Ultra Black do Índio`}
          width={1080}
          height={1080}
          priority
          className="mb-4 h-auto w-[clamp(6.75rem,26vw,10.5rem)]"
        />
        <ThankYou />
      </div>
    </main>
  );
}
