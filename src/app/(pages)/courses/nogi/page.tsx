"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiShieldCheckLine } from "react-icons/ri";

import { OtherCoursesSection, ProfessorSection } from "@/components/common";
import {
  FAQ as FaqSection,
  ScrollToTopButton,
  VideoPlayer,
} from "@/components/ui";


import { useTranslation } from "@/context";
import { initFacebookPixel, trackEvent } from "@/libs/facebookPixel";

export default function NoGiPage() {
  const { translations: t } = useTranslation();
  const [width, setWidth] = useState<number>(0);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%Finalizações%NOGI",
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
        className="bg-linear-to-b from-nogi-theme-light via-nogi-theme to-background dark:bg-background pt-40 pb-12 lg:pb-20 text-foreground"
      >
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-4 px-4 lg:px-48">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-theme">
                {t.nogi.hero.title}
              </h1>
              <p className="text-xl text-dark-theme mb-8">
                {t.nogi.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-2 lg:mx-auto">
                <motion.a
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://pay.kiwify.com.br/9vQgsZI"
                  onClick={() =>
                    trackEvent("ButtonClick", { button: "paymentButton" })
                  }
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1ff00_0%,#e8ff66_50%,#a8cc00_100%)]" />
                  <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-nogi-theme px-4 text-md font-medium text-dark-theme backdrop-blur-3xl">
                    {t.nogi.hero.cta}
                  </p>
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mr-2">
                    <svg className="w-5 h-5" fill="black" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-dark-theme">
                    {t.nogi.hero.students}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mr-2">
                    <svg className="w-5 h-5" fill="black" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-dark-theme">{t.nogi.hero.lifetime}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center mr-2">
                    <svg className="w-5 h-5" fill="black" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-dark-theme">{t.nogi.hero.guarantee}</span>
                </div>
              </div>
            </div>

            <VideoPlayer
              thumbnailUrl="/images/courses/curso-nogi-thumbnail.webp"
              videoUrl="https://www.youtube.com/watch?v=5qTbYUXGauQ"
              videoTitle={t.nogi.hero.videoTitle}
              videoDescription={t.nogi.hero.videoDescription}
              autoPlay
            />
          </div>
        </div>
      </section>
      <section id="problemas" className="py-8 lg:py-16 bg-background">
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center mb-4">
            {t.nogi.problems.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {t.nogi.problems.items.map((item: string, i: number) => (
              <div key={i} className="flex items-start p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
                <span className="text-2xl mr-3">❌</span>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center bg-nogi-theme/15 rounded-xl p-6 border-2 border-nogi-theme/30 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-primary-ja tracking-wider text-outline-shadow-black mb-2">
              {t.nogi.problems.key}
            </p>
            <p className="text-lg text-foreground mt-4">
              {t.nogi.problems.description}
            </p>
          </div>
        </div>
      </section>
      <section id="benefits" className="py-8 lg:py-16 bg-foreground/5">
        <div className=" ">
          <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center">
            {t.nogi.benefits.title}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-4 lg:mb-12 max-w-3xl mx-auto">
            {t.nogi.benefits.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-4 lg:mx-auto">
            {t.nogi.benefits.items.map((benefit: { icon: string; title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                className="space-y-1.5 p-6 rounded-lg border border-nogi-theme/50 shadow-sm "
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-ja mb-2 text-outline-shadow-black">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="beneficios-diretos" className="py-8 lg:py-16 bg-background">
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center mb-8">
            {t.nogi.directBenefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                {t.nogi.directBenefits.finish.title}
              </h3>
              <p className="text-muted-foreground">{t.nogi.directBenefits.finish.desc}</p>
            </div>
            <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                {t.nogi.directBenefits.energy.title}
              </h3>
              <p className="text-muted-foreground">{t.nogi.directBenefits.energy.desc}</p>
            </div>
            <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">⚔️</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                {t.nogi.directBenefits.offensive.title}
              </h3>
              <p className="text-muted-foreground">{t.nogi.directBenefits.offensive.desc}</p>
            </div>
            <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                {t.nogi.directBenefits.confidence.title}
              </h3>
              <p className="text-muted-foreground">{t.nogi.directBenefits.confidence.desc}</p>
            </div>
            <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                {t.nogi.directBenefits.respected.title}
              </h3>
              <p className="text-muted-foreground">{t.nogi.directBenefits.respected.desc}</p>
            </div>
            <div className="p-6 bg-background/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                {t.nogi.directBenefits.content.title}
              </h3>
              <p className="text-muted-foreground">{t.nogi.directBenefits.content.desc}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="callAction"
        className="py-8 lg:py-16 bg-nogi-theme text-dark-theme"
      >
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t.nogi.cta.title}
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            {t.nogi.cta.subtitle}
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            {t.nogi.cta.priceTitle}
          </h3>
          <p className="text-xl lg:text-2xl mb-4 max-w-2xl mx-auto">
            {t.nogi.cta.from}{" "}
            <s className="text-dark-theme">R$ 197,00</s>
          </p>

          <div className="mb-8">
            <div className="text-5xl font-bold mb-2 text-dark-theme">
              {t.nogi.cta.price}
            </div>
            <div className="text-xl text-dark-theme">{t.nogi.cta.installments}</div>
          </div>
          <div className="mx-2 lg:mx-auto">
            <motion.a
              className="relative inline-flex h-16 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="https://pay.kiwify.com.br/9vQgsZI"
              onClick={() =>
                trackEvent("ButtonClick", { button: "paymentButton" })
              }
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1ff00_0%,#e8ff66_50%,#a8cc00_100%)]" />
              <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-nogi-theme-light px-4 text-2xl font-medium text-dark-theme backdrop-blur-3xl">
                {t.nogi.cta.button}
              </p>
            </motion.a>
          </div>
        </div>
      </section>
      <section id="garantia" className="py-8 lg:py-16 bg-foreground/5">
        <div className=" ">
          <div className="max-w-6xl mx-4 lg:mx-auto text-center">
            <h2 className="text-3xl text-foreground font-semibold mb-2">
              {t.nogi.guarantee.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.nogi.guarantee.subtitle}
            </p>

            <div className="bg-background/90 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8 border-t-4 border-nogi-theme-dark">
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
                  <RiShieldCheckLine size={68} fill="#a8cc00" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t.nogi.guarantee.seal}
                </h3>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {t.nogi.guarantee.description}
              </p>

              <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/20">
                <p className="font-medium text-foreground">
                  {t.nogi.guarantee.noQuestions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-8 lg:py-16 bg-background">
        <div className="">
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center mb-8">
              {t.nogi.faq.title}
            </h2>

            <FaqSection items={t.nogi.faq.items} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-primary-ja font-bold tracking-wider text-outline-shadow-black mb-2">
                {t.nogi.faq.stillDoubts}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.nogi.faq.description}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="cursor-pointer px-12 py-4 rounded-full bg-[#1ED760] font-bold text-background tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
              >
                <div className="flex flex-row items-center gap-2">
                  <RiWhatsappLine size={width < 780 ? 68 : 26} />
                  <span className="text-background">
                    {t.nogi.faq.whatsapp}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProfessorSection type="nogi" />
      <OtherCoursesSection currentCourse="nogi" />
      <ScrollToTopButton />
    </main>
  );
}
