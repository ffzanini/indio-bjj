import React from "react";
import { Avatar } from "@/components/ui";
import { RiStarLine } from "react-icons/ri";

export function ProfessorSection({
  colorName,
}: Readonly<{ colorName?: string }>) {
  return (
    <section id="instrutor" className="py-8 lg:py-16 bg-gray-50">
      <div className="">
        <div className="max-w-5xl mx-4 lg:mx-auto text-center">
          <h2 className={`text-3xl text-${colorName} font-semibold mb-8`}>
            Conheça o Professor
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative">
                <Avatar
                  src="/images/profile/indio-profile.webp"
                  alt="Professor de Jiu-Jitsu"
                  fallback="FB"
                  size={250}
                  className="object-cover mx-auto"
                />

                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-dark-theme border-2 border-${colorName} text-white-theme px-3 py-2 rounded-full text-sm font-semibold`}
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
              <h3 className={`text-${colorName} text-2xl font-semibold mb-4`}>
                Prof. Fabiano Índio
              </h3>

              <div className="space-y-6">
                <p className="text-left text-gray-700 leading-relaxed mb-4">
                  Fundador da escola{" "}
                  <b className="text-gray-600">Índio Jiu Jitsu Team</b> afiliada
                  da <b className="text-gray-600">JA Jiu Jitsu</b>, é também
                  criador da página{" "}
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
                  className={`bg-white-theme/50 rounded-xl shadow-lg p-6 border-l-8 border-${colorName} text-3xl font-bold mb-4`}
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
