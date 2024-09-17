import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: {
          main: "var(--main)",
          "main-alt": "var(--main-alt)",
          "main-text": "var(--main-text)",
          secondary: "var(--secondary)",
          "secondary-alt": "var(--secondary-alt)",
          tertiary: "var(--tertiary)",
          hover: "var(--hover)",
          disabled: "var(--disabled)"
        },
      },
    },
  },
  plugins: [],
};
export default config;
