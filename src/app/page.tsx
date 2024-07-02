'use client'
import { useEffect, useState } from 'react'
import { RiCloseCircleLine, RiVerifiedBadgeLine } from 'react-icons/ri'

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
            src="https://www.youtube.com/embed/mmAx64LKlZQ"
            title="Como raspar adversário mais pesado na meia guarda"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <div className="flex flex-col items-center text-center justify-center lg:gap-4">
            <h3>Bem-vindo ao método Inovador de meia guarda</h3>
            <p className="px-0 lg:px-24 pb-4 lg:pb-0">
              Apresentado por Fabiano Oliveira, mais conhecido como Índio. Este
              curso não apenas simplifica, mas transforma sua abordagem para
              todas as posições críticas, baseando-se na larga experiência de
              campeonatos e anos como professor da academia JA Índio Jiu Jitsu.
            </p>
            <Link
              href=""
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
                SIM, QUERO DOMINAR A MEIA GUARDA
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:pt-0">
          <Image
            src="/images/instructor_indio.jpg"
            alt="Profile photo"
            width={width < 780 ? 280 : 480}
            height={0}
            className="border rounded-tr-[150px] rounded-bl-[150px] border-gray-900 dark:border-gray-50"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12 pt-4 lg:pt-16">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <h1>
            NÃO IMPORTA O SEU NÍVEL NO JIU-JITSU, SE PRATICA A ARTE SUAVE, ESTE
            CURSO É PRA VOCÊ!
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <motion.a
                aria-label="teste"
                target="_blank"
                className="flex justify-center items-center"
              >
                <RiCloseCircleLine size={50} />
              </motion.a>
              <h3>Método comun</h3>
              <p>
                A maioria dos cursos de Jiu-Jitsu te ensinam posições isoladas
                sem sequência lógica. O excesso de informação faz você travar, e
                não aprende corretamente. No fim de tudo você não conseguir
                aplicar nada do que assistiu.
              </p>
            </div>
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <motion.a
                aria-label="teste"
                target="_blank"
                className="flex justify-center items-center"
              >
                <RiVerifiedBadgeLine size={50} />
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
          <Link
            href=""
            className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
          >
            <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
              APRENDA COM O MESTRE ÍNDIO
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center text-center gap-4 lg:gap-12 lg:pt-16 pt-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <h1>ESTE TREINAMENTO REALMENTE É PARA MIM?</h1>
          <h3>Ainda está na dúvida se esse desafio é para você?</h3>
          <div>
            <h3>SE VOCÊ...</h3>
            <ul>
              <li>Tem dificuldades de aprender e memorizar as posições</li>
              <li>Não está conseguindo desenvolver o seu jogo por baixo</li>
              <li>
                Não tem tempo para o Jiu-Jitsu hoje e não quer ficar para trás
              </li>
            </ul>
          </div>
          <div>
            <p>
              Se você respondeu que SIM pra alguma dessas perguntas, ESTE CURSO
              É PARA VOCÊ.
            </p>
          </div>
          <p>
            ENTÃO, APERTE NO BOTÃO E GARANTA SEU ACESSO VITALÍCIO AGORA MESMO.
          </p>
          <div className="flex flex-col lg:flex-row">
            <Link
              href=""
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
                QUERO ACESSO VITALICIO AGORA
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center text-center gap-4 lg:gap-12 lg:pt-16 pt-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <h1>
            AO ENTRAR NO CURSO MEIA GUARDA COM FABIANO ÍNDIO, VOCÊ RECEBE:
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <h3>Módulo 1</h3>
              <p>Módulo 1</p>
            </div>
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <h3>Módulo 2</h3>
              <p>Módulo 2</p>
            </div>
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <h3>Módulo 3</h3>
              <p>Módulo 3</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12">
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <h3>Módulo 1</h3>
              <p>Módulo 1</p>
            </div>
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <h3>Módulo 2</h3>
              <p>Módulo 2</p>
            </div>
            <div className="p-12 bg-gray-700 border rounded-xl items-center justify-center text-center">
              <h3>Módulo 3</h3>
              <p>Módulo 3</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h3>VOCÊ RECEBE TUDO ISSO POR</h3>
            <p>12x de R$ 12,99</p>
            <p className="pb-2">ou R$ 147,00 À VISTA.</p>
            <Link
              href=""
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
                GARANTIR MEU ACESSO
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12 lg:pt-16 pt-4">
        <div className="flex flex-col items-center justify-center text-center gap-4 lg:w-9/12">
          <h1>AINDA TEM ALGUMA DÚVIDA?</h1>
          <h3>FALE COM A MINHA EQUIPE DE ATENDIMENTO</h3>
          <div className="flex flex-col lg:flex-row">
            <Link
              href=""
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
                Atendimento WhastApp
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:gap-12 lg:pt-16 pt-4">
        <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4 lg:w-9/12">
          <Image
            src="/images/instructor_indio.jpg"
            alt="Profile photo"
            width={width < 780 ? 280 : 290}
            height={0}
          />
          <div className="flex flex-col items-center justify-center text-center gap-4 lg:gap-12">
            <h1>Quem é Fabiano Índio:</h1>
            <p>
              Fabiano Índio é professor de Jiu Jitsu a mais de 20 anos e
              referência quando o assunto é ensino e a criação de campeões.
              Através de seu vasto conhecimento, todos seus alunos tiveram uma
              clara mudança e evolução através do seus ensinamentos. Isso se
              deve pela sua didática de ensino que engloba os mais variados
              biotipos de alunos. <br /> Não perca tempo e venha também ser um
              aluno!
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </Wrapper>
  )
}
