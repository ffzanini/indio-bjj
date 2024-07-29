'use client'
import { motion } from 'framer-motion'

import { socials } from '@/constants/socials'
import Link from 'next/link'

export function Footer() {
  const yearNow = new Date().getFullYear()

  return (
    <motion.footer
      className="flex flex-col bg-gray-0 dark:bg-gray-900 justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="px-6 pt-6 lg:pt-0">
        <div className="container flex justify-center">
          <p className="flex flex-col lg:flex-row">
            © Copyright {yearNow} Índio Jiu Jitsu | Todos os direitos
          </p>
        </div>
      </div>
      <div className="px-6">
        <div className="container mb-1 flex justify-center">
          <div className="flex flex-row gap-2 items-center">
            {socials.map(({ href, icon: Icon, name }) => (
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
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="py-1 bg-gray-800 w-screen justify-center">
        <div className="container flex flex-col ">
          <p className="flex flex-col text-base lg:flex-row gap-1 justify-center text-center">
            <Link
              href="https://www.ffzanini.dev/"
              target="_blank"
              className="text-base"
            >
              Website desenvolvido por Felipe Frantz Zanini
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
