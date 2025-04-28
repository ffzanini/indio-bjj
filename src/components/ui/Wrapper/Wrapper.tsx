'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animate } from '@/lib/utils'
import { contentAnim } from '@/constants/animations'

export function Wrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <motion.section
        className="min-h-screen items-center justify-center overflow-hidden"
        {...animate({
          variants: contentAnim,
        })}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
