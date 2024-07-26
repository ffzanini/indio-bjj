'use client'
import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animate } from '@/lib/utils'
import { contentAnim } from '@/constants/animations'

interface WrapperProps {
  children: ReactNode
}

export const WrapperHalfGuard: React.FC<WrapperProps> = ({ children }) => {
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {React.Children.map(children, (child, index) => {
        let bgColor =
          index % 2 === 0
            ? 'bg-dark-theme-background text-opacity-color-dark-theme-text'
            : 'bg-white-theme-background text-opacity-color-white-theme-text'

        if (index === 4) {
          bgColor = 'bg-blue-500 text-white'
        }

        if (index === 0) {
          return (
            <div
              className="bg-cover bg-center "
              style={{
                backgroundImage: "url('/images/indio-curso-meia-guarda.jpeg')",
              }}
            >
              {child}
            </div>
          )
        }
        return (
          <motion.section
            className={`${bgColor} items-center justify-center overflow-hidden p-4 lg:p-12`}
            {...animate({
              variants: contentAnim,
            })}
          >
            {child}
          </motion.section>
        )
      })}
    </AnimatePresence>
  )
}

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <motion.section
        className="min-h-screen items-center justify-center overflow-hidden p-4 lg:p-12"
        {...animate({
          variants: contentAnim,
        })}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
