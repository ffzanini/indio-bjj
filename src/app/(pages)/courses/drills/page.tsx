"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiShieldCheckLine } from "react-icons/ri";

import { ProfessorSection } from "@/components/common";
import { FAQ as FaqSection, ScrollToTopButton } from "@/components/ui";

import { drillsCourseBenefits } from "@/constants/benefits";
import { faqDrillsItems } from "@/constants/faq";

import { initFacebookPixel, trackEvent } from "@/libs/facebookPixel";

export default function DrillsPage() {
  const [width, setWidth] = useState<number>(0);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5553981372378?text=Olá!%20Tenho%20dúvidas%20sobre%20o%20curso%20de%20Sequencias%20Drills",
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
    <main>
      <section
        id="hero"
        className="bg-linear-to-b from-drills-theme-light via-drills-theme to-dark-theme-background pt-40 pb-12 lg:pb-20 text-white-theme"
      >
        <div className="w-full flex justify-center items-center">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-xl md:text-5xl lg:text-6xl font-bold mb-6">
                Melhore seu gás, mobilidade, consciência corporal e velocidade
                de raciocínio
              </h1>
              <p className="text-xl md:text-2xl text-white-theme mb-10 max-w-3xl mx-auto">
                Construa a base sólida que vai te dar confiança em qualquer
                situação dentro do tatame.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.a
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  href="https://pay.kiwify.com.br/hkR1jY2"
                  onClick={() =>
                    trackEvent("ButtonClick", { button: "paymentButton" })
                  }
                  target="_blank"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#60a5fa_50%,#1e40af_100%)]" />
                  <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-drills-theme px-8 text-md font-medium text-white-theme backdrop-blur-3xl">
                    QUERO GARANTIR MINHA VAGA
                  </p>
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white-theme/10 flex items-center justify-center mr-2">
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
                  <span className="text-white-theme">
                    +350 alunos satisfeitos
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white-theme/10 flex items-center justify-center mr-2">
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
                  <span className="text-white-theme">Acesso vitalício</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white-theme/10 flex items-center justify-center mr-2">
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
                  <span className="text-white-theme">Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="problemas" className="py-8 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <h2 className="text-3xl text-drills-theme text-center font-semibold mb-4">
            Talvez você se identifique com isso:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-drills-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Está cansado de assistir vídeos aleatórios na internet e não
                conseguir aplicar no treino
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-drills-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Fica travado durante o rola, sem lembrar o que deveria fazer
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-drills-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Sente que falta mobilidade, fluidez e segurança nas posições
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-drills-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                É amassado por parceiros menos graduados porque não domina os
                movimentos básicos
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-drills-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Tem medo de se lesionar por executar as posições de forma
                incorreta
              </p>
            </div>
          </div>
          <div className="text-center bg-drills-theme/15 rounded-xl p-6 border-2 border-drills-theme/30 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-drills-theme mb-2">
              Os Drills são a chave para desenvolver fluidez, mobilidade e
              confiança dentro do tatame.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Com este curso, você vai ter um passo a passo prático, direto ao
              ponto, para dominar os movimentos essenciais e transformar sua
              base no Jiu-Jitsu. Nada de firulas. Nada de perder tempo. Apenas o
              básico que realmente funciona.
            </p>
          </div>
        </div>
      </section>
      <section id="benefits" className="py-8 lg:py-16 bg-white-theme">
        <div className=" ">
          <h2 className="text-3xl text-drills-theme text-center font-semibold">
            O que você vai aprender
          </h2>
          <p className="text-xl text-center text-gray-600 mb-4 lg:mb-12 max-w-3xl mx-auto">
            Passo a passo prático, direto ao ponto, para dominar os movimentos
            essenciais e transformar sua base no Jiu-Jitsu
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-4 lg:mx-auto">
            {drillsCourseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="space-y-1.5 p-6 rounded-lg border shadow-sm "
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-drills-theme mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios-diretos" className="py-8 lg:py-16 bg-white-theme">
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <h2 className="text-3xl text-drills-theme text-center font-semibold mb-8">
            Benefícios diretos para o aluno
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-drills-theme/20 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-drills-theme mb-2">
                Evoluir mais rápido
              </h3>
              <p className="text-gray-600">
                Evolua mais rápido sem precisar decorar centenas de posições.
                Foque no essencial que realmente funciona.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-drills-theme/20 shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-drills-theme mb-2">
                Jogo limpo, seguro e eficiente
              </h3>
              <p className="text-gray-600">
                Tenha um jogo limpo, seguro e eficiente, executando as posições
                corretamente e evitando lesões.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-drills-theme/20 shadow-sm">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-drills-theme mb-2">
                Mais confiança no tatame
              </h3>
              <p className="text-gray-600">
                Melhore a confiança em qualquer situação dentro do tatame,
                dominando os movimentos fundamentais.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-drills-theme/20 shadow-sm">
              <div className="text-3xl mb-3">🏃</div>
              <h3 className="text-lg font-bold text-drills-theme mb-2">
                Mobilidade e resistência
              </h3>
              <p className="text-gray-600">
                Aumente sua mobilidade e resistência, diminuindo o risco de
                lesões e melhorando sua performance geral.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="callAction"
        className="py-8 lg:py-16 bg-drills-theme-dark text-white-theme"
      >
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Não perca mais tempo sendo amassado no tatame ou travando no meio do
            rola
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Dê um passo à frente no tatame e construa a base sólida que vai
            transformar sua fluidez, segurança e confiança nos treinos.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Quanto você vai investir na sua evolução no Jiu-Jitsu?
          </h3>
          <p className="text-xl lg:text-2xl mb-4 max-w-2xl mx-auto">
            Você recebe tudo isso de{" "}
            <s className="text-white-theme">R$ 297,00</s>
          </p>

          <div className="mb-8">
            <div className="text-5xl font-bold mb-2 text-white-theme">
              por R$ 89,90 à vista
            </div>
            <div className="text-xl text-white-theme">ou 12x R$ 9,30</div>
          </div>
          <div className="mb-6 max-w-2xl mx-auto">
            <p className="text-lg text-white-theme mb-2">
              <strong>Curso completo com mais de 60 aulas práticas</strong>
            </p>
          </div>
          <div className="mx-2 lg:mx-auto">
            <motion.a
              className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              href="https://pay.kiwify.com.br/hkR1jY2"
              onClick={() =>
                trackEvent("ButtonClick", { button: "paymentButton" })
              }
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#60a5fa_50%,#1e40af_100%)]" />
              <p className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-drills-theme px-4 text-md font-medium text-white-theme backdrop-blur-3xl">
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
              <span className="text-white-theme">Acesso vitalício</span>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="white" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white-theme">Satisfação garantida</span>
            </div>
          </div>
        </div>
      </section>
      <section id="garantia" className="py-8 lg:py-16 bg-gray-50">
        <div className=" ">
          <div className="max-w-6xl mx-4 lg:mx-auto text-center">
            <h2 className="text-3xl text-gray-700 font-semibold mb-2">
              Garantia incondicional de 7 dias
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Se não for o melhor investimento para sua evolução no Jiu Jitsu,
              devolvemos seu dinheiro
            </p>

            <div className="bg-white-theme/50 rounded-xl shadow-xl p-8 mb-8 border-t-4 border-drills-theme-dark">
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
                  <RiShieldCheckLine size={68} fill="#2563eb" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Selo de Garantia
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tenha acesso completo ao curso por 7 dias. Assista às aulas,
                pratique as sequências de drills, e se você sentir que esse
                conteúdo não está acelerando sua evolução no Jiu-Jitsu, basta
                solicitar o reembolso diretamente pela plataforma.
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
        <div className="">
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-3xl text-drills-theme font-semibold text-center mb-8">
              Perguntas Frequentes
            </h2>

            <FaqSection items={faqDrillsItems} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-drills-theme font-bold mb-2">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos à disposição para esclarecer qualquer dúvida que você
                tenha sobre o curso.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="cursor-pointer px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white-theme tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
              >
                <div className="flex flex-row items-center gap-2">
                  <RiWhatsappLine size={width < 780 ? 68 : 26} />
                  <span className="text-white-theme">
                    Fale Conosco pelo WhatsApp
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProfessorSection type="drills" />
      <ScrollToTopButton />
    </main>
  );
}
