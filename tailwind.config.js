/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md,vue}",
    "./cfg/_11ty/**/*.js",
    "./_site/**/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          "@apply px-4 max-w-7xl mx-auto": {}
        },
      });
    },
  ],
}

