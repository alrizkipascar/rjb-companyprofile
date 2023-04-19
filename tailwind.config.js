const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      }, backgroundImage: {
        'orange': "url('Image/orange.jpg')",
        'dump': "url('Image/photo/dump.jpg')",
        'excavator': "url('Image/photo/excavator.jpg')",
        'other': "url('Image/photo/other.jpg')",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
