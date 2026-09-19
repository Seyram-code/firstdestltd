import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7fb',
          100: '#e8eef6',
          500: '#0b1f33',
          700: '#143d63',
          900: '#091a2b',
        },
        accent: {
          400: '#d9b36a',
          500: '#c89d52',
        },
      },
      boxShadow: {
        soft: '0 24px 60px rgba(11, 45, 74, 0.12)',
        premium: '0 26px 80px rgba(11, 45, 74, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
