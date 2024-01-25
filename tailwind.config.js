/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'header': {
          100: '#eadec9',
          200: '#EFF2FE',
          300: '#F0F0F0',
        },
        'text': {
          100: '#000096',
          200: '#ff6e00',
        },
        'carousel': {
          100: '#1B4AFC',
        }
      },
    },
    // colors: {
    //   'header': {
    //     100: '#F0F0F0',
    //     200: '#EFF2FE',
    //   },
    // },
  },
  plugins: [],
}

