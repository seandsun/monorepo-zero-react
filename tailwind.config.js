/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx,html}', // Escanea todas las apps
  ],
  theme: {
    extend: {}, // Personalizar
  },
  plugins: [], // Se puede añadir @tailwindcss/forms, typography, etc.
};
