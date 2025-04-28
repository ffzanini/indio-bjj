'use client'
import { motion } from 'framer-motion'

import {
  ScrollToTopButton,
  ImagesSlider,
  Wrapper,
  Carousel,
} from '@/components/ui'
import { parallaxImages, ProgramsCarousel } from '@/constants/home'

export default function PricipalPage() {
  return (
    <Wrapper>
      <ImagesSlider className="h-screen" images={parallaxImages}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Jiu Jitsu de alta qualidade, <br /> transformando vidas
          </motion.p>
          <motion.p className="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
            Aulas para todos os níveis e idades. <br /> Marque uma aula
            experimental e venha fazer parte da família JA Jiu Jitsu
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-primary-ja-color/10 border-primary-ja-color/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>
              Agendar uma <b>aula grátis</b> agora
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
      <section className="bg-white py-20">
        <div className="flex flex-col justify-center items-center container">
          <p className="text-4xl lg:text-5xl text-black">VAMOS MARCAR A SUA</p>
          <p className="text-5xl lg:text-6xl text-primary-ja-color font-semibold">
            PRIMEIRA AULA
          </p>
          <div className="m-2 lg:w-[900px] flex flex-col items-center text-center py-6 gap-6">
            <p className="text-xl text-black">
              O Jiu-Jitsu é muito mais do que somente lutar — é descobrir novas
              forças dentro de você. Venha fazer sua primeira aula e experimente
              uma transformação que começa já no primeiro treino. Seu novo
              caminho pode começar hoje.
            </p>
            <p className="text-xl text-black">
              Clique abaixo e marque sua aula experimental!
            </p>
          </div>
          <button className="px-4 py-2 backdrop-blur-sm border bg-black border-primary-ja-color/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span className="text-white font-semibold">Agendar agora</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center pt-20">
          <p className="text-5xl">NOSSOS</p>
          <p className="text-6xl text-primary-ja-color font-semibold">
            PROGRAMAS
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full pt-10 pb-32">
          <Carousel slides={ProgramsCarousel} />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="flex flex-col justify-center items-center container">
          <p className="text-4xl lg:text-5xl text-black">VAMOS MARCAR A SUA</p>
          <p className="text-5xl lg:text-6xl text-primary-ja-color font-semibold">
            PRIMEIRA AULA
          </p>
          <div className="m-2 lg:w-[900px] flex flex-col items-center text-center py-6 gap-6">
            <p className="text-xl text-black">
              O Jiu-Jitsu é muito mais do que somente lutar — é descobrir novas
              forças dentro de você. Venha fazer sua primeira aula e experimente
              uma transformação que começa já no primeiro treino. Seu novo
              caminho pode começar hoje.
            </p>
            <p className="text-xl text-black">
              Clique abaixo e marque sua aula experimental!
            </p>
          </div>
          <button className="px-4 py-2 backdrop-blur-sm border bg-black border-primary-ja-color/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span className="text-white font-semibold">Agendar agora</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
          </button>
        </div>
      </section>
      <ScrollToTopButton />
    </Wrapper>
  )
}
