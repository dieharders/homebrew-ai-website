import tailwind from "eslint-plugin-tailwindcss";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      tailwindcss: {
        config: "tailwind.config.js",
      },
    },
  },
];
