import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "18": "4.5rem"
      }
    },
    colors: {
      white: "#ffffff",
      lightgray: "#b1b1b1",
      slategray: "#6f6f6f",
      darkgray: "#1e1e1e",
      darkergray: "#191919",
      blackish: "#151515",
      black: "#000000",
      brown: "#322d23",
      lightbrown: "#353025"
    }
  },
  plugins: [],
}

export default config;