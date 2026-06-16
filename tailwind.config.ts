import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        brandBg: '#EFEFEF',
        brandCanvas: '#FFFFFF',
        brandPrimary: '#111111',
        brandSecondary: '#6B7280',
        brandAccentBlue: '#2563EB',
        brandDark: '#07111F',
        brandBorder: '#E5E7EB',
      },
      boxShadow: {
        'premium': '0px 10px 40px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
};
export default config;
