import type { Config } from "tailwindcss";

export default {
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
        grayblue: "#575F71",
        black: "#1D1D23",
        yellowhover: "#E3B505",
        yellow: "#FAD840",
        white: "#FFFFFF",
        wheat: "#D9D9D9",
        blue: "#07399D"
      },
      fontFamily: {
        actor: ['Actor', 'system-ui'],
        jaro: ['Jaro', 'system-ui']
      }
    },
  },
  plugins: [],
} satisfies Config;
