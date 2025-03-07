/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { sm: { min: '500px' } },

      colors: {
        header: {
          start: 'rgba(0, 180, 216, 1)',
          middle: 'rgba(0, 197, 181, 0.6)',
          end: 'rgba(0, 216, 144, 1)',
        },
        footer: {
          start: 'rgba(0, 197, 181, 1)',
          end: 'rgba(76, 0, 255, 0.25)',
        },
      },
    },
  },
  plugins: [],
};
