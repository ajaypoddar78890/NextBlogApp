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
      sm: "350px",
      md: "550px",
      lg: "930px",
      xl: "1280px",
      xxl: "1400px",
      // Add your custom breakpoints
      // "realme-x7-max": "400px", // Adjust as needed
    },
    extend: {},
  },
  plugins: [],
};
