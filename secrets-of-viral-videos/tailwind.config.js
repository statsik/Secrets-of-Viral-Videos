/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
    screens: {
      mm: '393px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  plugins: [],
}

