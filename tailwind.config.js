/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
      },
      colors: {
        // Adding Apple-style colors
        'apple-blue': {
          DEFAULT: '#0066CC',
          '50': '#E6F2FF',
          '100': '#CCE5FF',
          '200': '#99CCFF',
          '300': '#66B2FF',
          '400': '#3399FF',
          '500': '#0080FF',
          '600': '#0066CC',
          '700': '#004C99',
          '800': '#003366',
          '900': '#001933',
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
