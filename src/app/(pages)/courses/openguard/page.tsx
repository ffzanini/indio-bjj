"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  RiWhatsappLine,
  RiShieldCheckLine,
  RiEmotionSadLine,
  RiEmotionLine,
} from "react-icons/ri";

import { OtherCoursesSection, ProfessorSection } from "@/components/common";
import {
  FAQ as FaqSection,
  ScrollToTopButton,
  VideoPlayer,
} from "@/components/ui";

import { useTranslation } from "@/context";
import { initFacebookPixel, trackEvent } from "@/libs/facebookPixel";

export default function OpenGuardPage() {
  const { translations: t } = useTranslation();
  const [width, setWidth] = useState<number>(0);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%20Guarda%20Aberta",
      "_blank",
    );
  };

  useEffect(() => {
    initFacebookPixel();
    trackEvent("PageView");
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <section
        id="hero"
        className="bg-linear-to-b from-open-guard-theme-light via-open-guard-theme to-background dark:bg-background pt-40 pb-12 lg:pb-20 text-foreground"
      >
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-4 px-4 lg:px-48">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t.openguard.hero.title}
              </h1>
              <p className="text-xl text-foreground mb-8">
                {t.openguard.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-2 lg:mx-auto">
                <motion.a
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://pay.kiwify.com.br/BJSNRE2"
                  onClick={() =>
                    trackEvent("ButtonClick", { button: "paymentButton" })
                  }
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cc3333_0%,#ff6d62_50%,#E2CBFF_100%)]" />
                  <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-open-guard-theme px-4 text-md font-medium text-foreground backdrop-blur-3xl">
                    {t.openguard.hero.cta}
                  </p>
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mr-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">
                    {t.openguard.hero.students}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mr-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">
                    {t.openguard.hero.lifetime}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mr-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">
                    {t.openguard.hero.guarantee}
                  </span>
                </div>
              </div>
            </div>

            <VideoPlayer
              thumbnailUrl="/images/courses/curso-guarda-aberta-thumbnail.webp"
              videoUrl="https://www.youtube.com/embed/u6p5H3yz5yE?autoplay=1&loop=1"
              videoTitle={t.openguard.hero.videoTitle}
              videoDescription={t.openguard.hero.videoDescription}
              autoPlay
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="py-8 lg:py-16 bg-background">
        <div className=" ">
          <h2 className="text-3xl text-open-guard-theme text-center font-semibold">
            {t.openguard.benefits.title}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-4 lg:mb-12 max-w-3xl mx-auto">
            {t.openguard.benefits.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-4 lg:mx-auto">
            {t.openguard.benefits.items.map(
              (
                benefit: { icon: string; title: string; description: string },
                index: number,
              ) => (
                <motion.div
                  key={index}
                  className="space-y-1.5 p-6 rounded-lg border shadow-sm "
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-open-guard-theme mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
      <section id="comparison" className="py-8 lg:py-16 bg-foreground/5">
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <h2 className="text-3xl text-open-guard-theme text-center font-semibold mb-4 lg:mb-12">
            {t.openguard.comparison.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-1.5 p-6 rounded-lg border shadow-sm "
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex text-4xl mb-2 justify-center items-center">
                <RiEmotionSadLine size={50} fill="#cc3333" />
              </div>
              <h3 className="text-2xl text-center font-bold text-open-guard-theme mb-1">
                {t.openguard.comparison.common.title}
              </h3>
              <p className="text-muted-foreground">
                {t.openguard.comparison.common.description}
              </p>
            </motion.div>
            <motion.div
              className="space-y-1.5 p-6 rounded-lg border shadow-sm "
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex text-4xl mb-2 justify-center items-center">
                <RiEmotionLine size={50} fill="#cc3333" />
              </div>
              <h3 className="text-2xl text-center font-bold text-open-guard-theme mb-1">
                {t.openguard.comparison.indio.title}
              </h3>
              <p className="text-muted-foreground">
                {t.openguard.comparison.indio.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="callAction"
        className="py-8 lg:py-16 bg-open-guard-theme-dark text-foreground"
      >
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t.openguard.cta.title}
          </h2>
          <p className="text-xl lg:text-2xl mb-4 max-w-2xl mx-auto">
            {t.openguard.cta.from} <s className="text-foreground">R$ 197,00</s>
          </p>

          <div className="mb-8">
            <div className="text-5xl font-bold mb-2 text-foreground">
              {t.openguard.cta.price}
            </div>
            <div className="text-xl text-foreground">
              {t.openguard.cta.installments}
            </div>
          </div>
          <div className="mx-2 lg:mx-auto">
            <motion.a
              className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="https://pay.kiwify.com.br/BJSNRE2"
              onClick={() =>
                trackEvent("ButtonClick", { button: "paymentButton" })
              }
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cc3333_0%,#ff6d62_50%,#E2CBFF_100%)]" />
              <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-open-guard-theme px-4 text-md font-medium text-foreground backdrop-blur-3xl">
                {t.openguard.cta.button}
              </p>
            </motion.a>
          </div>
        </div>
      </section>
      <section id="garantia" className="py-8 lg:py-16 bg-foreground/5">
        <div className=" ">
          <div className="max-w-6xl mx-4 lg:mx-auto text-center">
            <h2 className="text-3xl text-foreground font-semibold mb-2">
              {t.openguard.guarantee.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.openguard.guarantee.subtitle}
            </p>

            <div className="bg-background/50 rounded-xl shadow-xl p-8 mb-8 border-t-4 border-open-guard-theme-dark">
              <div className="flex flex-col items-center mb-6">
                <motion.div
                  className="w-24 h-24 bg-foreground/10 rounded-full flex items-center justify-center mb-4"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <RiShieldCheckLine size={68} fill="#8e0007" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t.openguard.guarantee.seal}
                </h3>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {t.openguard.guarantee.description}
              </p>

              <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/20">
                <p className="font-medium text-foreground">
                  {t.openguard.guarantee.noQuestions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-8 lg:py-16 bg-background">
        <div className="">
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-3xl text-open-guard-theme font-semibold text-center mb-8">
              {t.openguard.faq.title}
            </h2>

            <FaqSection items={t.openguard.faq.items} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-open-guard-theme font-bold mb-2">
                {t.openguard.faq.stillDoubts}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.openguard.faq.description}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="cursor-pointer px-12 py-4 rounded-full bg-[#1ED760] font-bold text-foreground tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
              >
                <div className="flex flex-row items-center gap-2">
                  <RiWhatsappLine size={width < 780 ? 68 : 26} />
                  <span className="text-foreground">
                    {t.openguard.faq.whatsapp}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProfessorSection type="openGuard" />
      <OtherCoursesSection currentCourse="openguard" />
      <ScrollToTopButton />
    </div>
  );
}
