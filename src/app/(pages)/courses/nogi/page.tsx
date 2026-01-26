"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiWhatsappLine, RiShieldCheckLine } from "react-icons/ri";

import { ProfessorSection } from "@/components/common";
import {
  FAQ as FaqSection,
  ScrollToTopButton,
  VideoPlayer,
} from "@/components/ui";

import { nogiCourseBenefits } from "@/constants/benefits";
import { faqNogiItems } from "@/constants/faq";

import { initFacebookPixel, trackEvent } from "@/libs/facebookPixel";

export default function NoGiPage() {
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
    <main>
      <section
        id="hero"
        className="bg-linear-to-b from-nogi-theme-light via-nogi-theme to-dark-theme-background pt-40 pb-12 lg:pb-20 text-dark-theme"
      >
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-4 px-4 lg:px-48">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Domine as finalizações do NO GI e encerre a luta de qualquer
                posição
              </h1>
              <p className="text-xl text-dark-theme mb-8">
                Construa um jogo letal, eficiente e direto ao ponto, capaz de
                finalizar adversários em qualquer cenário do combate, sem
                depender de pontos.
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
                    QUERO GARANTIR MINHA VAGA
                  </p>
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white-theme/10 flex items-center justify-center mr-2">
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
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
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
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
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
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

            <VideoPlayer
              thumbnailUrl="/images/courses/curso-nogi-thumbnail.webp"
              videoUrl="https://www.youtube.com/watch?v=5qTbYUXGauQ"
              videoTitle="Curso de Finalizações NO GI"
              videoDescription="Domine as finalizações do NO GI e encerre a luta de qualquer posição"
            />
          </div>
        </div>
      </section>
      <section id="problemas" className="py-8 lg:py-16 bg-gray-50">
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center mb-4">
            Talvez você se identifique com isso:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Faz o jogo andar, mas não consegue concluir a luta
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Chega em boas posições, mas trava na hora de finalizar
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Se desgasta em guerras de pontuação no NO GI
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Sente que falta ajuste fino para finalizar com eficiência
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Perde oportunidades claras por não reconhecer as brechas certas
              </p>
            </div>
            <div className="flex items-start p-4 bg-white-theme/80 backdrop-blur-sm rounded-lg shadow-sm border border-nogi-theme/10">
              <span className="text-2xl mr-3">❌</span>
              <p className="text-gray-700">
                Tem dificuldade em finalizar tanto por cima quanto por baixo
              </p>
            </div>
          </div>
          <div className="text-center bg-nogi-theme/15 rounded-xl p-6 border-2 border-nogi-theme/30 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-bold text-primary-ja tracking-wider text-outline-shadow-black mb-2">
              No NO GI, quem não finaliza… sobrevive. Quem finaliza, domina.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              As finalizações são a essência do NO GI. Nada de jogo burocrático.
              Nada de depender de vantagem ou pontos. Aqui o foco é encerrar a
              luta.
            </p>
          </div>
        </div>
      </section>
      <section id="benefits" className="py-8 lg:py-16 bg-white-theme">
        <div className=" ">
          <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center">
            O que você vai aprender
          </h2>
          <p className="text-xl text-center text-gray-600 mb-4 lg:mb-12 max-w-3xl mx-auto">
            Finalizações traumáticas, precisas e eficientes, aplicáveis em
            situações reais de treino e competição
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-4 lg:mx-auto">
            {nogiCourseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="space-y-1.5 p-6 rounded-lg border shadow-sm "
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary-ja mb-2 text-outline-shadow-black">
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
          <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center mb-8">
            Benefícios diretos para o aluno
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                Finalizar sem depender de pontos
              </h3>
              <p className="text-gray-600">
                Encerre a luta de qualquer posição, sem depender de vantagem ou
                pontos.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                Economizar energia
              </h3>
              <p className="text-gray-600">
                Evite lutas longas e desgastantes, finalizando com eficiência.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">⚔️</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                Recursos ofensivos em qualquer posição
              </h3>
              <p className="text-gray-600">
                Tenha ataques letais disponíveis de qualquer posição do combate.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                Mais confiança e agressividade
              </h3>
              <p className="text-gray-600">
                Jogue NO GI com mais confiança, agressividade e controle total.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                Jogo respeitado e perigoso
              </h3>
              <p className="text-gray-600">
                Desenvolva um jogo que seja respeitado e temido pelos
                adversários.
              </p>
            </div>
            <div className="p-6 bg-white-theme/90 backdrop-blur-sm rounded-lg border border-nogi-theme/20 shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-primary-ja mb-2 text-outline-shadow-black">
                Conteúdo direto ao ponto
              </h3>
              <p className="text-gray-600">
                Mais de 1 hora só de finalizações NO GI, sem enrolação.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="callAction"
        className="py-8 lg:py-16 bg-nogi-theme-dark text-dark-theme"
      >
        <div className=" text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Pare de vencer nos pontos e perder na prática
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Dê um passo à frente no tatame e transforme seu jogo de NO GI em uma
            arma real de finalização.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Quanto você vai investir para se tornar um finalizador?
          </h3>
          <p className="text-xl lg:text-2xl mb-4 max-w-2xl mx-auto">
            Você recebe tudo isso de{" "}
            <s className="text-dark-theme">R$ 197,00</s>
          </p>

          <div className="mb-8">
            <div className="text-5xl font-bold mb-2 text-dark-theme">
              por R$ 89,90 à vista
            </div>
            <div className="text-xl text-dark-theme">ou 12x R$ 9,30</div>
          </div>
          <div className="mx-2 lg:mx-auto">
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
                QUERO GARANTIR MINHA VAGA
              </p>
            </motion.a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="#161618" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-dark-theme">Acesso vitalício</span>
            </div>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="#161618" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-dark-theme">Satisfação garantida</span>
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

            <div className="bg-white-theme/90 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8 border-t-4 border-nogi-theme-dark">
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
                  <RiShieldCheckLine size={68} fill="#a8cc00" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700">
                  Selo de Garantia
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tenha acesso completo ao curso por 7 dias. Assista às aulas,
                aplique as técnicas, e se você sentir que esse conteúdo não está
                transformando seu jogo de NO GI, basta solicitar o reembolso
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
        <div className="">
          <div className="max-w-3xl mx-4 lg:mx-auto">
            <h2 className="text-3xl text-primary-ja font-semibold tracking-wider text-outline-shadow-black text-center mb-8">
              Perguntas Frequentes
            </h2>

            <FaqSection items={faqNogiItems} />

            <div className="text-center mt-8">
              <h3 className="text-xl text-primary-ja font-bold tracking-wider text-outline-shadow-black mb-2">
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
      <ProfessorSection type="nogi" />
      <ScrollToTopButton />
    </main>
  );
}
