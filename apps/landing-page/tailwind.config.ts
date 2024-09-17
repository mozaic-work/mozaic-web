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
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        'default-btn':
          '`\n          inset 0 -10px 8px -1px rgba(255, 115, 69, 1),\n          0 0 0 1px rgba(255, 255, 255, 1),\n          0 0 0 2px rgba(34, 41, 47, 0.1)\n        `',
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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'caret-blink': {
          '0%,70%,100%': {
            opacity: '1',
          },
          '20%,50%': {
            opacity: '0',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
