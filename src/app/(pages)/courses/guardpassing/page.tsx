"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiShieldCheckLine, RiWhatsappLine } from "react-icons/ri";

import { OtherCoursesSection, ProfessorSection } from "@/components/common";
import {
  FAQ as FaqSection,
  ScrollToTopButton,
  VideoPlayer,
} from "@/components/ui";
import { useTranslation } from "@/context";
import { initFacebookPixel, trackEvent } from "@/libs/facebookPixel";

export default function GuardPassingPage() {
  const { translations: t } = useTranslation();
  const [width, setWidth] = useState<number>(0);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%20Passagens%20de%20Guarda",
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
    <main className="min-h-screen bg-background">
      <section
        id="hero"
        className="bg-linear-to-b from-guard-passing-theme-light via-guard-passing-theme to-background dark:bg-background pt-40 pb-12 lg:pb-20 text-foreground"
      >
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-4 px-4 lg:px-48">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t.guardpassing.hero.title}
              </h1>
              <p className="text-xl text-foreground mb-8">
                {t.guardpassing.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-2 lg:mx-auto">
                <motion.a
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://pay.kiwify.com.br/X4gDESY"
                  onClick={() =>
                    trackEvent("ButtonClick", { button: "paymentButton" })
                  }
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0D9488_0%,#2DD4BF_50%,#CCFBF1_100%)]" />
                  <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-guard-passing-theme px-4 text-md font-medium text-foreground backdrop-blur-3xl">
                    {t.guardpassing.hero.cta}
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
                    {t.guardpassing.hero.students}
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
                    {t.guardpassing.hero.lifetime}
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
                    {t.guardpassing.hero.guarantee}
                  </span>
                </div>
              </div>
            </div>

            <VideoPlayer
              thumbnailUrl="/images/courses/curso-passagens-guarda-thumbnail.svg"
              videoUrl="https://www.youtube.com/embed/l6rMJQcK1-s?autoplay=1&loop=1&rel=0"
              videoTitle={t.guardpassing.hero.videoTitle}
              videoDescription={t.guardpassing.hero.videoDescription}
              autoPlay
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="py-8 lg:py-16 bg-background">
        <div>
          <h2 className="text-3xl text-guard-passing-theme text-center font-semibold">
            {t.guardpassing.benefits.title}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-4 lg:mb-12 max-w-3xl mx-auto">
            {t.guardpassing.benefits.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-4 lg:mx-auto">
            {t.guardpassing.benefits.items.map(
              (
                benefit: { icon: string; title: string; description: string },
                index: number,
              ) => (
                <motion.div
                  key={index}
                  className="space-y-1.5 p-6 rounded-lg border border-guard-passing-theme/50 shadow-sm"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-guard-passing-theme mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="callAction"
        className="py-8 lg:py-16 bg-guard-passing-theme-dark text-foreground"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t.guardpassing.cta.title}
          </h2>
          <p className="text-xl lg:text-2xl mb-4 max-w-2xl mx-auto">
            {t.guardpassing.cta.from}
          </p>

          <div className="mb-8">
            <div className="text-5xl font-bold mb-2 text-foreground">
              {t.guardpassing.cta.price}
            </div>
            <div className="text-xl text-foreground">
              {t.guardpassing.cta.installments}
            </div>
          </div>
          <div className="mx-2 lg:mx-auto">
            <motion.a
              className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="https://pay.kiwify.com.br/X4gDESY"
              onClick={() =>
                trackEvent("ButtonClick", { button: "paymentButton" })
              }
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0D9488_0%,#2DD4BF_50%,#CCFBF1_100%)]" />
              <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-guard-passing-theme px-4 text-md font-medium text-foreground backdrop-blur-3xl">
                {t.guardpassing.cta.button}
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      <section id="garantia" className="py-8 lg:py-16 bg-foreground/5">
        <div>
          <div className="max-w-6xl mx-4 lg:mx-auto text-center">
            <h2 className="text-3xl text-foreground font-semibold mb-2">
              {t.guardpassing.guarantee.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.guardpassing.guarantee.subtitle}
            </p>

            <div className="bg-background/50 rounded-xl shadow-xl p-8 mb-8 border-t-4 border-guard-passing-theme-dark">
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
                  <RiShieldCheckLine size={68} fill="#0f766e" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t.guardpassing.guarantee.seal}
                </h3>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {t.guardpassing.guarantee.description}
              </p>

              <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/20">
                <p className="font-medium text-foreground">
                  {t.guardpassing.guarantee.noQuestions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-8 lg:py-16 bg-background">
        <div>
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-3xl text-guard-passing-theme font-semibold text-center mb-8">
              {t.guardpassing.faq.title}
            </h2>

            <FaqSection items={t.guardpassing.faq.items} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-guard-passing-theme font-bold mb-2">
                {t.guardpassing.faq.stillDoubts}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.guardpassing.faq.description}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="cursor-pointer px-12 py-4 rounded-full bg-[#1ED760] font-bold text-foreground tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
              >
                <div className="flex flex-row items-center gap-2">
                  <RiWhatsappLine size={width < 780 ? 68 : 26} />
                  <span className="text-foreground">
                    {t.guardpassing.faq.whatsapp}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProfessorSection type="guardPassing" />
      <OtherCoursesSection currentCourse="guardpassing" />
      <ScrollToTopButton />
    </main>
  );
}
