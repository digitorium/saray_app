/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

