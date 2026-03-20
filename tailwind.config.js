/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e3a5f', // blue-900
          hover: '#1e40af',   // blue-800
        },
        accent: {
          DEFAULT: '#0d9488', // teal-600
        },
      },
    },
  },
  plugins: [],
}