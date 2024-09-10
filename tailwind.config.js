/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        customSans: ['Helvetica', 'Arial', 'sans-serif'],
        customSerif: ['Georgia', 'serif'],
        customMono: ['Courier New', 'monospace'],
        customCursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}

