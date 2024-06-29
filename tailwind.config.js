/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Oswald", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      height: {
        card: "200px",
        card2: "230px",
        card3: "270px",
      },
      screens: {
        xsm: "456px",
      },
      boxShadow: {
        header: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
