'use client'
import { useEffect, useState } from 'react'
import {
  RiEmotionUnhappyLine,
  RiEmotionLaughLine,
  RiVerifiedBadgeLine,
} from 'react-icons/ri'

import Image from 'next/image'
import Link from 'next/link'

import { ScrollToTopButton, Wrapper } from '@/components'
import { motion } from 'framer-motion'

export default function PricipalPage() {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <Wrapper>
      <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center lg:w-7/12 lg:gap-4">
          <h3>Aprenda os segredos da meia guarda com:</h3>
          <h2 className="pb-4 lg:pb-0">Fabiano Índio</h2>
          <iframe
            className="w-[300px] h-[200px] lg:w-[620px] lg:h-[400px]"
            src="https://www.youtube.com/embed/d5ljtNaK1bQ?autoplay=1&loop=1&rel=0"
            title="Curso de meia guarda"
            allow="autoplay; encrypted-media"
          />
          <div className="flex flex-col items-center text-center justify-center lg:gap-4">
            <h3>Bem-vindo ao método Inovador de meia guarda</h3>
            <p className="px-0 lg:px-24 pb-4 lg:pb-2">
              Apresentado por Fabiano Índio, este curso não apenas simplifica,
              como aborda também de forma clara e completa todas as posições
              críticas dessa guarda, baseando-se na larga experiência de
              campeonatos e anos como professor da academia Índio Jiu Jitsu
              Team.
            </p>
            <motion.a
              href="https://pay.hotmart.com/W94160265J"
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-error-white-theme  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-white dark:hover:text-gray-800 px-2 py-2 lg:px-6 lg:py-4">
                QUERO DOMINAR A MEIA GUARDA
              </p>
            </motion.a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:pt-0">
          <Image
            src="/images/indio-curso-meia-guarda.jpeg"
            alt="Profile photo"
            width={width < 780 ? 280 : 600}
            height={0}
            className="lg:border lg:rounded-tr-[150px] lg:rounded-bl-[150px] border-gray-900 dark:border-gray-50"
          />
        </div>
      </div>
      <div className="bg-white h-[1px] my-8" />
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <h2>
            NÃO IMPORTA O SEU NÍVEL NO JIU-JITSU, SE PRATICA A ARTE SUAVE, ESTE
            CURSO É PRA VOCÊ!
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12 pb-4">
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center lg:h-60">
              <motion.a
                aria-label="método comum"
                target="_blank"
                className="flex justify-center items-center"
              >
                <RiEmotionUnhappyLine size={50} />
              </motion.a>
              <h3>Método comun</h3>
              <p>
                A maioria dos cursos de Jiu-Jitsu te ensinam posições isoladas
                sem sequência lógica. O excesso de informação faz você travar, e
                não aprender corretamente. No fim de tudo, você não vai
                conseguir aplicar nada do que assistiu.
              </p>
            </div>
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center lg:h-60">
              <motion.a
                aria-label="método índio"
                target="_blank"
                className="flex justify-center items-center"
              >
                <RiEmotionLaughLine size={50} />
              </motion.a>
              <h3>Sistema Índio</h3>
              <p>
                Entenda a mentalidade de um professor experiente no momento da
                execução de posições. Mesmo com um jogo completamente diferente,
                qualquer pessoa vai conseguir utilizar o que está sendo
                transmitido.
              </p>
            </div>
          </div>
          <motion.a
            href="https://pay.hotmart.com/W94160265J"
            target="_blank"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-error-white-theme  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
          >
            <p className="text-white dark:text-white dark:hover:text-gray-800 px-2 py-2 lg:px-6 lg:py-4">
              APRENDA COM O MESTRE ÍNDIO
            </p>
          </motion.a>
        </div>
      </div>
      <div className="bg-white h-[1px] my-8" />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-11/12">
          <h2>PORQUE ESCOLHER ESTE CURSO</h2>
          <div>
            <ul className="flex flex-col items-start gap-8 lg:gap-2">
              <li className="flex flex-row items-center justify-center text-center gap-2">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-1">
                  <h4 className="flex flex-row font-bold items-center gap-2">
                    <RiVerifiedBadgeLine size={22} />
                    Aulas Exclusivas:
                  </h4>
                  <p className="items-end">
                    Conteúdo gravado em alta qualidade com explicações
                    detalhadas.
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center text-center gap-2">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-1">
                  <h4 className="flex flex-row font-bold items-center gap-2">
                    <RiVerifiedBadgeLine size={22} /> Acesso Facilitado:
                  </h4>
                  <p className="items-end">
                    Estude no seu próprio ritmo com acesso ilimitado ao
                    conteúdo.
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center text-center gap-2">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-1">
                  <h4 className="flex flex-row font-bold items-center gap-2">
                    <RiVerifiedBadgeLine size={22} />
                    Suporte Direto:
                  </h4>
                  <p className="items-end">
                    Tire suas dúvidas diretamente com Fabiano Índio e receba
                    feedback para melhorar ainda mais seu desempenho.
                  </p>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center text-center gap-2">
                <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-1">
                  <h4 className="flex flex-row font-bold items-center gap-2">
                    <RiVerifiedBadgeLine size={22} />
                    Garantia de Satisfação:
                  </h4>
                  <p className="items-end">
                    Se não estiver satisfeito, você tem 7 dias para solicitar
                    reembolso.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white h-[1px] my-8" />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:gap-8 lg:w-9/12">
          <h2>AO ENTRAR NO CURSO MEIA GUARDA, VOCÊ RECEBE:</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-6 lg:gap-12">
            <div className="p-8 bg-gray-700 border rounded-xl items-center justify-center text-center lg:w-80 lg:h-40">
              <h3 className="pb-4">Fundamentos da Meia Guarda</h3>
              <p>
                Entenda a base e a importância dessa posição crucial no
                Jiu-Jitsu
              </p>
            </div>
            <div className="p-8 bg-gray-700 border rounded-xl items-center justify-center text-center lg:w-80 lg:h-40">
              <h3 className="pb-4">Variedades de Meia Guarda</h3>
              <p>
                Explore diferentes variações, como a meia guarda profunda, Z
                guard, e muito mais.
              </p>
            </div>
            <div className="p-8 bg-gray-700 border rounded-xl items-center justify-center text-center lg:w-80 lg:h-40">
              <h3 className="pb-4">Ataques com as suas Finalizações</h3>
              <p>
                Domine uma variedade de ataques e finalizações eficazes a partir
                da meia guarda.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
            <div className="p-8 bg-gray-700 border rounded-xl items-center justify-center text-center lg:w-80 lg:h-40">
              <h3 className="pb-4 lg:pt-4">Defesas e Transições</h3>
              <p>
                Aprenda a defender e transitar para posições vantajosas com
                segurança.
              </p>
            </div>
            <div className="p-8 bg-gray-700 border rounded-xl items-center justify-center text-center lg:w-80 lg:h-40">
              <h3 className="pb-4 lg:pt-4">Treinos Práticos</h3>
              <p>
                Exercícios e drills para incorporar essas técnicas no seu jogo
                diário.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h3>VOCÊ RECEBE TUDO ISSO</h3>
            <h3>
              de <s>R$ 147,00</s>
            </h3>
            <h2 className="pb-2 lg:pb-6">
              por R$ 97,00 À VISTA.<h4>ou 12x de R$ 9,68</h4>
            </h2>
            <motion.a
              href="https://pay.hotmart.com/W94160265J"
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
              dark:bg-error-white-theme  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-white dark:hover:text-gray-800 px-2 py-2 lg:px-6 lg:py-4">
                GARANTIR MEU ACESSO
              </p>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="bg-white h-[1px] my-8" />
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <h2>AINDA TEM ALGUMA DÚVIDA?</h2>
          <h3>Fale com a minha equipe de atendimento no link abaixo</h3>
          <div className="flex flex-col lg:flex-row">
            <Link
              href="https://wa.me/5553981372378"
              target="_blank"
              className="w-full lg:w-auto text-center dark:border-b-2   "
            >
              <h4 className="text-white dark:text-white dark:hover:text-green ">
                Atendimento via WhastApp
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white h-[1px] my-8" />
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <Image
            src="/images/indio-perfil.png"
            alt="Profile photo"
            width={180}
            height={180}
            className="rounded-full border border-gray-900 dark:border-gray-50"
          />
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <h2>Quem é o professor?</h2>
            <p>
              Fabiano Índio é fundador da Índio Jiu Jitsu Team e um dos
              instrutores mais respeitados do Brasil. Com anos de dedicação ao
              esporte e à formação de campeões, Índio traz uma abordagem única e
              eficiente para o ensino da meia guarda, isso se deve pela sua
              didática de ensino que engloba os mais variados biotipos de
              alunos. <br /> Não perca tempo e venha também ser um aluno!
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
