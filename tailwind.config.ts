import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': 'calc(1480px + 16px)',
      },
    },
    variants: {
      extend: {
        rotate: ['data-state'],
      },
    },
    extend: {
      fontSize: {
        caption: '1rem',
        body: '1.2rem',
        h4: '1.4rem',
        h3: '1.7rem',
        h2: '2.3rem',
        h1: '3.0rem',
      },
      colors: {
        'dark-theme-background': '#121212',
        'white-theme-background': '#FFFFFF',

        'open-guard-theme': '#cc3333',
        'open-guard-theme-light': '#ff6d62',
        'open-guard-theme-dark': '#8e0007',

        'half-guard-theme': '#CC9933',
        'half-guard-theme-light': '#FFCF68',
        'half-guard-theme-dark': '#916600',

        'primary-ja-color': '#d1ff00',

        'primary-color-dark-theme-text': '#FFFFFF',
        'opacity-color-dark-theme-text': 'rgba(255,255,255, 0.87)',
        'disabled-text-color-dark-theme': 'rgba(255,255,255, 0.38)',

        'primary-color-white-theme-text': '#000000',
        'opacity-color-white-theme-text': 'rgba(0,0,0, 0.87)',
        'disable-text-color-white-theme': 'rgba(0,0,0, 0.38)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 300ms ease-in-out',
        'accordion-up': 'accordion-up 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
