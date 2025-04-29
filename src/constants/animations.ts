import { AnimVariants } from '@/lib/utils'

export const indicator = {
  initial: {
    opacity: 0,
  },
  enter: (show: boolean) => ({
    opacity: show ? 1 : 0,
    x: show ? 0 : -10,
  }),
}

export const contentAnim: AnimVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const carousel = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir < 0 ? 300 : -300,
    opacity: 0,
  }),
}
