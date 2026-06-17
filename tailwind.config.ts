import type { Config } from 'tailwindcss';

// In Tailwind v4, configuration is CSS-first via @theme in globals.css.
// This file is kept minimal to avoid conflicts with the CSS-based config.
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
