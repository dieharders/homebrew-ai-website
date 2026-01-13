/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./blocks/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lilita: ['"Lilita One"', "sans-serif"],
        "comic-mono": ['"Comic Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
