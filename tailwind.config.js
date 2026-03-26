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
        eau: {
          50:  '#edfaf8',
          100: '#d0f4ef',
          200: '#a5e9df',
          300: '#5ecfbe',  // vert d'eau principal
          400: '#3aafa0',  // hover / foncé
          500: '#2a9188',
          600: '#1f7269',
        },
        dark: {
          900: '#07080f',  // fond hero
          800: '#0d1018',
          700: '#141b27',
        },
        primary: {
          DEFAULT: '#0f172a',
          hover:   '#1e293b',
        },
      },
    },
  },
  plugins: [],
}
