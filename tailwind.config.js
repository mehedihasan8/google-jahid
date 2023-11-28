/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,json}",
    "./src/**/**/*.{js,ts,jsx,tsx,json}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,json}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk"],
        paragraph: ["Inter"],
        "paragraph-medium": ["Inter"],
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          warning: "#FAAF00",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("flowbite/plugin") , require('@tailwindcss/typography')],
};
