{import('tailwindcss').Config} 
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-theme-primary) / <alpha-value>)',
          50: 'rgb(240 249 255)',
          100: 'rgb(224 242 254)',
          200: 'rgb(186 230 253)',
          300: 'rgb(125 211 252)',
          400: 'rgb(56 189 248)',
          500: 'rgb(var(--color-theme-primary) / <alpha-value>)', // Base primary color
          600: 'rgb(2 132 199)',
          700: 'rgb(3 105 161)',
          800: 'rgb(7 89 133)',
          900: 'rgb(12 74 110)',
          950: 'rgb(8 47 73)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-theme-secondary) / <alpha-value>)',
          50: 'rgb(236 254 255)',
          100: 'rgb(207 250 254)',
          200: 'rgb(165 243 252)',
          300: 'rgb(103 232 249)',
          400: 'rgb(34 211 238)',
          500: 'rgb(var(--color-theme-secondary) / <alpha-value>)', // Base secondary color
          600: 'rgb(8 145 178)',
          700: 'rgb(14 116 144)',
          800: 'rgb(21 94 117)',
          900: 'rgb(22 78 99)',
          950: 'rgb(8 51 68)',
        },
        background: 'rgb(var(--color-theme-background) / <alpha-value>)',
        text: 'rgb(var(--color-theme-text) / <alpha-value>)',
        accent: 'rgb(var(--color-theme-accent) / <alpha-value>)',
        gray: {
          50: 'rgb(249 250 251)',
          100: 'rgb(243 244 246)',
          200: 'rgb(229 231 235)',
          300: 'rgb(209 213 219)',
          400: 'rgb(156 163 175)',
          500: 'rgb(107 114 128)',
          600: 'rgb(75 85 99)',
          700: 'rgb(55 65 81)',
          800: 'rgb(31 41 55)',
          900: 'rgb(17 24 39)',
          950: 'rgb(3 7 18)',
        },
        white: 'rgb(255 255 255)',
        black: 'rgb(0 0 0)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],

}