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
          orange: "var(--orange)",
          mint: "var(--mint)",
          "dark-green": "var(--dark-green)",
          "orange-hover": "var(--orange-hover)",
          hover: "var(--hover)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
