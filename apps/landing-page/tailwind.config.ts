import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    '../../../packages/ui/src/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        'default-btn': `
          inset 0 -10px 8px -1px rgba(255, 115, 69, 1),
          0 0 0 1px rgba(255, 255, 255, 1),
          0 0 0 2px rgba(34, 41, 47, 0.1)
        `,
      },
      colors: {
        'porcelain-50': 'hsl(210, 20%, 96%, 100%)',
        'porcelain-100': 'hsl(210, 19%, 94%, 100%)',
        'porcelain-200': 'hsl(203, 16%, 86%, 100%)',
        'porcelain-300': 'hsl(204, 19%, 74%, 100%)',
        'porcelain-400': 'hsl(205, 18%, 60%, 100%)',
        'porcelain-500': 'hsl(204, 17%, 48%, 100%)',
        'porcelain-600': 'hsl(206, 19%, 39%, 100%)',
        'porcelain-700': 'hsl(206, 20%, 32%, 100%)',
        'porcelain-800': 'hsl(208, 19%, 27%, 100%)',
        'porcelain-900': 'hsl(207, 16%, 24%, 100%)',
        'porcelain-950': 'hsl(208, 16%, 16%, 100%)',

        'scarlet-50': 'hsl(25, 100%, 96%, 100%)',
        'scarlet-100': 'hsl(26, 100%, 91%, 100%)',
        'scarlet-200': 'hsl(23, 100%, 82%, 100%)',
        'scarlet-300': 'hsl(21, 100%, 71%, 100%)',
        'scarlet-400': 'hsl(18, 100%, 60%, 100%)',
        'scarlet-500': 'hsl(15, 100%, 52%, 100%)',
        'scarlet-600': 'hsl(10, 100%, 50%, 100%)',
        'scarlet-700': 'hsl(7, 98%, 40%, 100%)',
        'scarlet-800': 'hsl(5, 87%, 34%, 100%)',
        'scarlet-900': 'hsl(5, 83%, 28%, 100%)',
        'scarlet-950': 'hsl(3, 89%, 15%, 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
