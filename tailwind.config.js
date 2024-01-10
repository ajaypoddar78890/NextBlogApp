/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "400px",
      md: "600px",
      lg: "1024px",
      xl: "1280px",
      // Add your custom breakpoints
      // "realme-x7-max": "400px", // Adjust as needed
    },
    extend: {},
  },
  plugins: [],
};
