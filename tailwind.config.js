/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        mono: [
          "SF Mono",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
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
      },
      animation: {
        'blob': 'blob 10s infinite ease',
        'shine': 'shine 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -10px) scale(1.05)' },
          '50%': { transform: 'translate(0, 10px) scale(1)' },
          '75%': { transform: 'translate(-20px, -10px) scale(0.95)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }
    },
  },
  plugins: [],
}
