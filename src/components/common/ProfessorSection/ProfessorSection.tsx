import React from "react";
import Image from "next/image";
import { RiStarLine } from "react-icons/ri";

interface ProfessorSectionProps {
  type?: "halfGuard" | "openGuard" | "drills" | "nogi" | "neutral";
}

export function ProfessorSection({ type = "neutral" }: ProfessorSectionProps) {
  const typeColors: Record<string, { text: string; border: string }> = {
    halfGuard: {
      border: "border-half-guard-theme",
      text: "text-half-guard-theme",
    },
    openGuard: {
      border: "border-open-guard-theme",
      text: "text-open-guard-theme",
    },
    drills: {
      border: "border-drills-theme",
      text: "text-drills-theme",
    },
    nogi: {
      border: "border-nogi-theme",
      text: "text-nogi-theme",
    },
    neutral: {
      border: "border-gray-400",
      text: "text-gray-400",
    },
  };

  const { border, text } = typeColors[type] ?? typeColors.neutral;

  return (
    <section id="instrutor" className="py-8 lg:py-16 bg-gray-50">
      <div className="">
        <div className="max-w-5xl mx-4 lg:mx-auto text-center">
          <h2
            className={`text-3xl ${type === "nogi" ? "text-primary-ja font-semibold tracking-wider text-outline-shadow-black" : `${text} font-semibold`} mb-8`}
          >
            Conheça o Professor
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <div
                  className="relative overflow-hidden rounded-full border-4 border-white shadow-xl"
                  style={{ width: "250px", height: "250px" }}
                >
                  <Image
                    src={
                      type === "nogi"
                        ? "/images/profile/indio-nogi.webp"
                        : "/images/profile/indio-profile.webp"
                    }
                    alt="Professor de Jiu-Jitsu"
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-dark-theme border-2 ${border} text-white-theme px-3 py-2 rounded-full text-sm font-semibold`}
                >
                  Faixa Preta 3º Grau
                </div>
              </div>

              <div className="mt-12 space-y-4">
                <div className="flex items-center justify-center font-semibold">
                  <RiStarLine className="w-6 h-6 mr-2" fill="dark-theme" />
                  <span className="text-dark-theme">
                    20+ Anos de Experiência
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h3
                className={`${type === "nogi" ? "text-primary-ja font-semibold tracking-wider text-outline-shadow-black" : `${text} font-semibold`} text-2xl mb-4`}
              >
                Prof. Fabiano Índio
              </h3>

              <div className="space-y-6">
                <p className="text-left text-gray-700 leading-relaxed mb-4">
                  Fundador da escola{" "}
                  <b className="text-gray-600">Índio Jiu Jitsu Team</b> afiliada
                  da <b className="text-gray-600">JA Índio Jiu Jitsu</b>, é
                  também criador da página{" "}
                  <a
                    className="text-gray-600 font-semibold"
                    href="https://www.instagram.com/indiodrills/"
                    target="_blank"
                  >
                    @indiodrills
                  </a>{" "}
                  e um dos professores mais respeitados do Brasil. Com anos de
                  dedicação ao esporte e à formação de campeões, Índio traz uma
                  abordagem única e eficiente para o ensino de todas as suas
                  técnicas. Isso se deve pela sua didática de ensino que engloba
                  os mais variados biotipos de alunos. Não perca tempo e venha
                  também ser um aluno!
                </p>

                <div
                  className={`bg-white-theme/50 rounded-xl shadow-lg p-6 border-l-8 ${border} text-3xl font-bold mb-4`}
                >
                  <p className="italic text-base text-gray-600">
                    &quot;Minha missão é transmitir não apenas técnicas, mas
                    também os valores da arte marcial, preparando os alunos para
                    os desafios da vida.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
