import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const hideScrollbarPlugin = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.hide-scrollbar': {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  };
  addUtilities(newUtilities);
});

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mb: { min: '320px', max: '767px' },
      tb: { min: '768px', max: '1023px' },
    },
  },
  plugins: [hideScrollbarPlugin],
};
export default config;
