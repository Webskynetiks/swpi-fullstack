/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...fontFamily.sans], // Add Roboto font
        poppins: ['Poppins', ...fontFamily.sans], // Add Poppins font
        segoe: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#32064A',
        orange: '#e66a1f',
        lightpink: '#e42a69',
        secondary: '#1F2937',
        accent: '#3B82F6',
        muted: '#9CA3AF',
      },
      screens: {
        xlnav: '1100px', // ✅ this is your custom breakpoint
      },
    },
  },
  plugins: [],
};
