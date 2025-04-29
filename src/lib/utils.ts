import { type ClassValue, clsx } from 'clsx'
import { cva } from 'class-variance-authority'
import { MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type AnimVariants = {
  initial?: import('framer-motion').Variant
  enter: import('framer-motion').Variant
  exit?: import('framer-motion').Variant
}

interface AnimProps extends MotionProps {
  variants: AnimVariants
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  custom?: any
}

export const animate = ({ variants, custom, ...rest }: AnimProps) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    whileHover: 'hover',
    whileInView: 'view',
    viewport: {
      once: true,
    },
    custom,
    variants,
    ...rest,
  }
}

export function getSecondsUntilEndOfYear(): number {
  const now = new Date()
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
  const diffInSeconds = Math.floor((endOfYear.getTime() - now.getTime()) / 1000)
  return diffInSeconds
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export const getWeekDay = (week: string) => {
  switch (week) {
    case 'Monday':
      return 'Segunda-feira'
    case 'Tuesday':
      return 'Terça-feira'
    case 'Wednesday':
      return 'Quarta-feira'
    case 'Thursday':
      return 'Quinta-feira'
    case 'Friday':
      return 'Sexta-feira'
    case 'Saturday':
      return 'Sábado'
    case 'Sunday':
      return 'Domingo'
    case 'Holiday':
      return 'Feriado'
    default:
      return 'Monday'
  }
}
