/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0F0F0F',
          600: '#0a0a0a',
          700: '#080808',
          800: '#050505',
          900: '#000000',
        },
        secondary: {
          500: '#D62828',
          600: '#A91E1E',
          700: '#8A1A1A',
        },
        accent: {
          500: '#D4A017',
          600: '#B8860B',
          700: '#9A7209',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#4B5563',
          700: '#404040',
          800: '#262626',
          900: '#1A1A1A',
        },
        navbar: '#1A1A1A',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"'],
        heading: ['system-ui', '-apple-system', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-lg': '3rem',
        'display-md': '2.5rem',
        'display-sm': '2rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        glow: '0 4px 14px 0 rgba(214, 40, 40, 0.2)',
        'glow-lg': '0 8px 25px 0 rgba(214, 40, 40, 0.25)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
};

module.exports = config;
