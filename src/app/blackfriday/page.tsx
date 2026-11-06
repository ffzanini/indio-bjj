import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SITE_NAME, SITE_URL } from "@/constants/seo";

import { CountdownBar } from "./CountdownBar";
import { LeadForm } from "./LeadForm";
import { BlackFridayCta, BlackFridayTracking } from "./tracking";

const title = "Ultra Black Friday | JA Índio Jiu Jitsu";
const description =
  "Pela primeira vez, Fabiano Índio libera todos os cursos com acesso vitalício num combo de Black Friday. A condição secreta sai no dia 18/11, às 20h, no grupo VIP.";
const canonical = `${SITE_URL}/blackfriday`;
const marquee = Array.from({ length: 12 }, () => "ULTRA BLACK FRIDAY");

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlackFridayPage() {
  return (
    <main className="min-h-screen bg-black pt-14 text-white-theme">
      <BlackFridayTracking />
      <CountdownBar />
      <section className="relative flex h-[calc(100svh-3.5rem)] flex-col overflow-hidden lg:block">
        <div className="relative min-h-0 flex-1 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%]">
          <Image
            src="/images/profile/sales.png"
            alt={`${SITE_NAME}, Fabiano Índio`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[center_20%] lg:object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent lg:inset-y-0 lg:right-auto lg:left-0 lg:h-full lg:w-2/5 lg:bg-gradient-to-r" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl shrink-0 flex-col px-4 pt-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 lg:grid lg:h-full lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:px-10 lg:py-6">
          <div>
            <Image
              src="/images/logos/logo.png"
              alt="Ultra Black do Índio"
              width={1080}
              height={1080}
              priority
              className="mx-auto -mt-[calc(0.5*clamp(7rem,32vw,11rem))] -mb-[calc(0.26*clamp(7rem,32vw,11rem))] h-auto w-[clamp(7rem,32vw,11rem)] lg:mx-0 lg:mt-0 lg:mb-[clamp(0.15rem,0.5vh,0.6rem)] lg:w-[12.5rem]"
            />
            <p className="mx-auto mb-1 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-primary-ja/50 px-4 py-2 text-[0.68rem] leading-tight font-semibold tracking-[0.08em] text-primary-ja uppercase sm:px-3 sm:py-[clamp(0.2rem,0.5vh,0.5rem)] sm:text-[clamp(0.62rem,1.4vh,0.85rem)] sm:tracking-[0.12em] lg:mx-0 lg:mb-[clamp(0.35rem,0.8vh,1.25rem)]">
              <span className="size-1.5 shrink-0 rounded-full bg-primary-ja" />
              <span>
                <span className="block sm:inline">18 de novembro · 20h</span>
                <span className="block sm:inline sm:before:content-['·_']">
                  Grupo VIP no WhatsApp
                </span>
              </span>
            </p>
            <h1 className="text-[clamp(1.35rem,4.2vh,4.5rem)] leading-[1.08] font-bold tracking-tight">
              Você nunca mais vai precisar gastar{" "}
              <em className="text-primary-ja italic">um centavo</em> com outro
              curso de Jiu&#8209;Jitsu.
            </h1>
            <p className="mt-[clamp(0.4rem,1vh,1.5rem)] max-w-xl text-[clamp(0.78rem,1.75vh,1.35rem)] leading-snug text-white/80">
              Pela primeira vez, vou liberar todos os meus cursos com acesso
              vitalício em um combo exclusivo de Black Friday. A condição
              secreta será revelada no dia 18/11, às 20h, exclusivamente dentro
              do grupo VIP.
            </p>
            <BlackFridayCta className="mt-[clamp(0.55rem,1.3vh,2rem)] inline-flex w-full items-center justify-center rounded-full bg-primary-ja px-5 py-[clamp(0.7rem,1.5vh,1rem)] text-center text-[clamp(0.85rem,1.7vh,1.125rem)] font-bold text-black transition hover:brightness-110 lg:w-fit">
              Quero participar da Ultra Black Friday
            </BlackFridayCta>
          </div>
        </div>
      </section>

      <div className="bf-marquee border-y border-primary-ja/30 bg-primary-ja py-3 text-black">
        <div className="bf-marquee-track">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="px-4 text-sm font-bold tracking-[0.35em] uppercase"
            >
              {marquee.join("  ✦  ")}
              {"  ✦  "}
            </p>
          ))}
        </div>
      </div>

      <section id="form" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <LeadForm />
        </div>
      </section>
      <footer className="border-t border-white/15 px-6 py-8 text-center text-white-theme">
        <p>©{new Date().getFullYear()} Índio Jiu Jitsu | Todos os direitos reservados</p>
        <p className="mt-2">
          Desenvolvido por{" "}
          <Link
            href="https://www.ffzanini.dev/"
            target="_blank"
            prefetch={false}
            className="hover:text-primary-ja"
          >
            Felipe Frantz Zanini
          </Link>
        </p>
      </footer>
    </main>
  );
}
