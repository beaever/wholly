import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui-web/src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
