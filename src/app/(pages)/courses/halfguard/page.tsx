"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiShieldCheckLine } from "react-icons/ri";

import { ProfessorSection } from "@/components/common";
import { FAQ, ScrollToTopButton, VideoPlayer } from "@/components/ui";

import { halfGuardCourseBenefits } from "@/constants/benefits";
import { faqHalfGuardItems } from "@/constants/faq";

import { initFacebookPixel, trackEvent } from "@/libs/facebookPixel";

export default function HalfGuardPage() {
  const [width, setWidth] = useState<number>(0);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%20Meia%20Guarda",
      "_blank"
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
    <div>
      <section
        id="hero"
        className="bg-gradient-to-b from-half-guard-theme-light via-half-guard-theme to-dark-theme-background pt-40 pb-12 lg:pb-20 text-white"
      >
        <div className="container">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Domine a Meia Guarda e revolucione seu Jiu-Jitsu
              </h1>
              <p className="text-xl text-white mb-8">
                O curso mais completo para transformar sua meia guarda em uma
                poderosa arma, mesmo contra oponentes maiores e mais fortes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-2 lg:mx-auto">
                <motion.a
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://pay.hotmart.com/W94160265J?off=ezsf7gfg"
                  onClick={() =>
                    trackEvent("ButtonClick", { button: "paymentButton" })
                  }
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CC9933_0%,#FFCF68_50%,#E2CBFF_100%)]" />
                  <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-half-guard-theme px-4 text-md font-medium text-white backdrop-blur-3xl">
                    QUERO GARANTIR MINHA VAGA
                  </p>
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-2">
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
                  <span className="text-white">+350 alunos satisfeitos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-2">
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
                  <span className="text-white">Acesso vitalício</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-2">
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
                  <span className="text-white">Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            <VideoPlayer
              thumbnailUrl="/images/courses/curso-meia-guarda-thumbnail.webp"
              videoUrl="https://www.youtube.com/embed/d5ljtNaK1bQ?autoplay=1&loop=1&rel=0"
              videoTitle="Curso de meia guarda"
              videoDescription="Transforme sua técnica de Meia Guarda"
            />
          </div>
        </div>
      </section>
      <section id="benefits" className="py-8 lg:py-16 bg-white">
        <div className="container ">
          <h2 className="text-half-guard-theme text-center font-semibold">
            Benefícios do Curso
          </h2>
          <p className="text-xl text-center text-gray-600 mb-4 lg:mb-12 max-w-3xl mx-auto">
            Transforme sua meia guarda de uma posição defensiva para uma arma
            ofensiva letal
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-4 lg:mx-auto">
            {halfGuardCourseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="space-y-1.5 p-6 rounded-lg border shadow-sm "
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-half-guard-theme mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="callAction"
        className="py-8 lg:py-16 bg-half-guard-theme-dark text-white"
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Pronto para revolucionar sua Meia Guarda?
          </h2>
          <p className="text-xl lg:text-2xl mb-4 max-w-2xl mx-auto">
            Você recebe tudo isso de <s className="text-white">R$ 147,00</s>
          </p>

          <div className="mb-8">
            <div className="text-5xl font-bold mb-2 text-white">
              por R$ 47,00 à vista
            </div>
            <div className="text-xl text-white">ou 8x R$ 8,82</div>
          </div>
          <div className="mx-2 lg:mx-auto">
            <motion.a
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="https://pay.hotmart.com/W94160265J?off=ezsf7gfg"
              onClick={() =>
                trackEvent("ButtonClick", { button: "paymentButton" })
              }
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CC9933_0%,#FFCF68_50%,#E2CBFF_100%)]" />
              <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-half-guard-theme px-4 text-md font-medium text-white backdrop-blur-3xl">
                QUERO GARANTIR MINHA VAGA
              </p>
            </motion.a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">Acesso vitalício</span>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white">Satisfação garantida</span>
            </div>
          </div>
        </div>
      </section>
      <section id="garantia" className="py-8 lg:py-16 bg-gray-50">
        <div className="container ">
          <div className="max-w-4xl mx-4 lg:mx-auto text-center">
            <h2 className="text-gray-700 font-semibold mb-2">
              Garantia incondicional de 7 dias
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Se não for o melhor investimento para sua evolução no Jiu Jitsu,
              devolvemos seu dinheiro
            </p>

            <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border-t-4 border-open-guard-theme-dark">
              <div className="flex flex-col items-center mb-6">
                <motion.div
                  className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4"
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
                <h3 className="text-2xl font-bold text-gray-700">
                  Selo de Garantia
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tenha acesso completo ao curso por 7 dias. Assista às aulas,
                aplique as técnicas, e se você sentir que esse conteúdo não está
                transformando sua meia guarda, basta solicitar o reembolso
                diretamente pela plataforma.
              </p>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-medium text-gray-700">
                  Sem perguntas. Sem complicações. Garantia total do seu
                  investimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-8 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-half-guard-theme font-semibold text-center mb-8">
              Perguntas Frequentes
            </h2>

            <FAQ items={faqHalfGuardItems} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-half-guard-theme font-bold mb-2">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos à disposição para esclarecer qualquer dúvida que você
                tenha sobre o curso.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
              >
                <div className="flex flex-row items-center gap-2">
                  <RiWhatsappLine size={width < 780 ? 68 : 26} />
                  <span className="text-white">Fale Conosco pelo WhatsApp</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProfessorSection colorName="half-guard-theme" />
      <ScrollToTopButton />
    </div>
  );
}
