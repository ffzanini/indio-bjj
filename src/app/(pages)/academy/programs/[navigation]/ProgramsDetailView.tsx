'use client'
import { Programs } from '@/app/data/programs'
import { Card, CardContent, ScrollToTopButton, Wrapper } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

interface ProgramsDetailViewProps {
  program: Programs
}

export default function ProgramsDetailView({
  program,
}: Readonly<ProgramsDetailViewProps>) {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5553991886599?text=Olá!%20Tenho%20interesse%20em%20agendar%20uma%20aula%20experimental!',
      '_blank',
    )
  }

  return (
    <Wrapper>
      <section className="bg-gradient-to-b from-primary-ja-color via-primary-ja-color to-dark-theme-background pt-40 pb-12 lg:pb-20 text-white">
        <div className="container">
          <div className="flex flex-col-reverse gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-12 lg:mb-20 text-black">
                {program.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse gap-4 p-4 lg:container lg:grid lg:grid-cols-2 lg:p-14">
        <div className="flex flex-col gap-4 pb-4 lg:pb-0">
          <div className="text-white text-2xl">{program.description}</div>
          <div className="text-white text-2xl">
            Professor Responsável:{' '}
            <b className="text-2xl">{program.professors}</b>
          </div>
        </div>
        <Image
          className="aspect-video w-full rounded-3xl object-cover"
          src={program.image}
          alt={program.title}
          width={1280}
          height={800}
        />
      </section>
      <section className="flex justify-center lg:container max-w-3xl m-3 pt-8 pb-16">
        <div
          className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-ja-color text-3xl font-bold mb-4`}
        >
          <p className="italic text-xl text-gray-600">{program.quote}</p>
        </div>
      </section>
      {program.benefits.length >= 1 && (
        <section className="container pb-20">
          <div className="flex flex-col items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8 text-white">
                Benefícios de se juntar ao programa {program.title}
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {program.benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="rounded-2xl border-primary-ja-color shadow-md bg-white/90 backdrop-blur-sm m-3 lg:m-0"
                >
                  <CardContent className="flex rounded-2xl justify-center bg-gradient-to-r from-gray-50 to-white p-14 ">
                    <p className="text-xl font-bold text-black text-center">
                      {benefit}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20">
        <div className="flex flex-col justify-center items-center container">
          <p className="text-3xl lg:text-5xl text-black">
            COMEÇAR NA <b className="text-3xl lg:text-5xl text-black">JA</b> É
            FÁCIL
          </p>
          <p className="text-4xl lg:text-6xl text-primary-ja-color font-semibold pb-6 text-center">
            AGENDE UMA AULA EXPERIMENTAL
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 lg:px-6 lg:py-4 backdrop-blur-sm border bg-black border-primary-ja-color/20 text-white mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400"
          >
            <span className="text-white text-xl lg:text-2xl font-semibold">
              Agendar agora
            </span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
          </button>
        </div>
      </section>
      <section className="bg-primary-ja-color py-14">
        <div className="flex flex-col justify-center items-center container">
          <Link href="/academy/programs" className="text-white">
            <button className="p-4 lg:p-6 text-white mx-auto text-center rounded-full relative mt-2 hover:-translate-y-1 transition duration-400">
              <span className="text-black text-2xl lg:text-3xl font-semibold">
                Ainda com dúvidas? Clique aqui para ver mais dos nossos
                programas de treino
              </span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary-ja-color to-transparent" />
            </button>
          </Link>
        </div>
      </section>
      <ScrollToTopButton />
    </Wrapper>
  )
}
