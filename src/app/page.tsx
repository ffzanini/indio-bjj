'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Wrapper } from '@/components'

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
            <p className="px-0 lg:px-24">
              Apresentado por Fabiano Oliveira, mais conhecido como Indio. Este
              instrucional não apenas simplifica, mas transforma sua abordagem
              para todas as posições críticas, baseando-se na larga experiência
              de campeonatos e anos como professor da academia JA Indio Jiu
              Jitsu.
            </p>
            <Link
              href="/about"
              className="w-full lg:w-auto text-center rounded-full bg-black hover:bg-primary-color-800 border border-gray-200 
            dark:bg-white  dark:border-gray-600 dark:hover:bg-primary-color-300 dark:hover:border-gray-600"
            >
              <p className="text-white dark:text-black px-2 py-2 lg:px-8 lg:py-4">
                SIM, QUERO DOMINAR A MEIA GUARDA
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/instructor_indio.jpg"
            alt="Profile photo"
            width={width < 780 ? 280 : 480}
            height={0}
            className="border rounded-tr-[150px] rounded-bl-[150px] border-gray-900 dark:border-gray-50"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col">
          <h1>
            NÃO IMPORTA O SEU NÍVEL NO JIU-JITSU, SE PRATICA A ARTE SUAVE, ESTE
            CURSO É PRA VOCÊ!
          </h1>
          <div>
            <h3>Método comun</h3>
            <p>
              A maioria dos cursos de Jiu-Jitsu te ensinam posições isoladas sem
              sequência lógica. O excesso de informação faz você travar, na
              realidade, não conseguir aplicar nada do que assistiu.
            </p>
          </div>
          <div>
            <h3>Sistema Indio</h3>
            <p>
              Entenda a mentalidade de um campeão mundial no momento da execução
              de posições. Mesmo com um jogo completamente diferente, qualquer
              pessoa vai conseguir utilizar o que está sendo transmitido.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <h1>
            AO ENTRAR NO CURSO MEIA GUARDA COM FABIANO INDIO, VOCÊ RECEBE:
          </h1>
          <ul>
            <li>
              X aulas exclusivas te mostrando a base para uma boa meia guarda.
            </li>
            <li>
              X aulas exclusivas te mostrando a base para uma boa meia guarda.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <h1>ESTE TREINAMENTO É PARA MIM?</h1>
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
          <div>
            ENTÃO, APERTE NO BOTÃO E GARANTA SEU ACESSO VITALÍCIO AGORA MESMO.
          </div>
          <div className="flex flex-col lg:flex-row">
            <Link
              href="/about"
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
    </Wrapper>
  )
}
