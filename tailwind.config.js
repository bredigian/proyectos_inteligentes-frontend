/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        pi: {
          blue: {
            light: '#65BEFC',
            normal: '#208EC9',
          },
          gray: {
            'ultra-light': '#F2F2F2',
            light: '#E5E5E5',
            'semi-light': '#A6A6A6',
            normal: '#999999',
          },
        },
      },
    },
  },
  plugins: [],
};
