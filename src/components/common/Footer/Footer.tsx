'use client'
import { motion } from 'framer-motion'

import { socialsAcademia, socialsIndio } from '@/constants/socials'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const yearNow = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-3 justify-between items-center">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-2 text-sm font-normal text-black"
          >
            <Image
              src="/images/logos/ja-indio-logo.png"
              alt="logo"
              width={240}
              height={30}
            />
          </Link>
          <p className="text-xl font-semibold lg:pb-4">
            Honra, moral, respeito e lealdade.
          </p>
          <div className="justify-start items-start">
            <div className="px-6 pt-6 lg:pt-0 flex flex-col gap-4">
              <p className="text-xl">
                Rua Doutor Amarante 779, Pelotas, Rio Grande do Sul, Brasil
              </p>
              <div>
                <p className="text-lg gap-2">
                  <b className="text-lg">Telefone: </b> (53)99188-6599
                </p>
                <p className="text-lg gap-2">
                  <b className="text-lg">Email: </b>fabianojiu@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-8 lg:pt-0">
          <div className="flex flex-col container mb-1 flex justify-center items-center">
            <p className="text-xl font-semibold">SIGA NOSSAS REDES SOCIAIS</p>
            <div className="flex flex-row gap-2 items-center">
              <p className="font-semibold">Academia:</p>
              {socialsAcademia.map(({ href, icon: Icon, name }) => (
                <motion.a
                  aria-label={name}
                  target="_blank"
                  key={href}
                  href={href}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300"
                >
                  <Icon size={32} />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p className="font-semibold">Mestre Índio:</p>
              {socialsIndio.map(({ href, icon: Icon, name }) => (
                <motion.a
                  aria-label={name}
                  target="_blank"
                  key={href}
                  href={href}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="p-2 flex justify-center items-center hover:brightness-250 transition-all duration-300"
                >
                  <Icon size={32} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex px-6">
          <div className="flex flex-col container mb-1 flex justify-center items-center">
            <p className="text-xl font-semibold">Dúvidas sobre onde treinar?</p>
            <p>
              Acesse o{' '}
              <a
                className="font-semibold"
                href="https://www.jajiujitsu.com.br/"
                target="_blank"
              >
                site oficial
              </a>{' '}
              da nossa matriz e conheça mais sobre a nossa história, serviços e
              academias perto de você! Não perca tempo, venha ser JA você
              também!
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pt-6 mt-8 gap-4 lg:pt-2 flex flex-col justify-center items-center border-t border-gray-600">
        <p className="text-lg pt-4">
          ©{yearNow} Índio Jiu Jitsu | Todos os direitos reservados
        </p>
        <p className="flex flex-col text-base gap-1 justify-center text-center pb-4">
          <Link
            href="https://www.ffzanini.dev/"
            target="_blank"
            className="text-md"
          >
            Desenvolvido por Felipe Frantz Zanini
          </Link>
        </p>
      </div>
    </motion.footer>
  )
}
