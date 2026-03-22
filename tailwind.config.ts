import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Retro Desktop OS Palette */
        grain:     '#E8E0D0',
        window:    '#FEFDF8',
        accent:    '#F7941D',
        'accent-hover': '#E07B00',
        'nav-bg':  '#1A1A1A',
        'nav-text':'#CCCCCC',
        'accent-blue': '#3B5BE5',
        'tag-bg':  '#F0EFEA',
        'tag-border': '#CCCCCC',
        'subtle':  '#D0CFC9',
        'hover-tint': '#FFF3E0',
        'toolbar-bg': '#F5F4F0',
        'chrome':  '#E8E8E8',
        dark:      '#1A1A1A',
        mid:       '#444444',
        muted:     '#888888',
      },
      fontFamily: {
        sans:    ['Inter', 'DM Sans', 'sans-serif'],
        heading: ['DM Sans', 'Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        cartoon: '3px 3px 0px rgba(0,0,0,0.10)',
        'cartoon-lg': '5px 5px 0px rgba(0,0,0,0.12)',
        btn:     '2px 2px 0px rgba(0,0,0,0.19)',
        window:  '0 4px 24px rgba(0,0,0,0.12), 3px 3px 0px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        os: '10px',
      },
      animation: {
        'window-open': 'windowOpen 0.35s cubic-bezier(0.34, 1.15, 0.64, 1) both',
        'icon-jiggle': 'iconJiggle 0.35s ease',
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        windowOpen: {
          from: { opacity: '0', transform: 'scale(0.88) translateY(24px)' },
          to:   { opacity: '1', transform: 'scale(1)   translateY(0)' },
        },
        iconJiggle: {
          '0%':   { transform: 'rotate(0deg)' },
          '20%':  { transform: 'rotate(-8deg)' },
          '40%':  { transform: 'rotate(8deg)' },
          '60%':  { transform: 'rotate(-5deg)' },
          '80%':  { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
