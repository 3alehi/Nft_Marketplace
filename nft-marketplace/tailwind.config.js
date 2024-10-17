/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgBtn:"#A259FF",
      },

      screens: {
        'xs': '304px',   // سایز مخصوص 304px
        'sm-custom': '568px',  // سایز مخصوص 568px
      },
    },
  },
  plugins: [],
};
