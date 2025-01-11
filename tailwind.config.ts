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
        mainTheme: "var(--main-theme)",
        borderLine: "var(--border-line)",
        fontColor: "var(--font-color)",
      },
    },
    spacing: {
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1.25rem",
      "5": "1.5rem",
      "6": "1.75rem",
      "7": "2rem",
      "8": "2.5rem",
    },
    fontSize: {
      "xxl": "6rem",
      "l": "5rem",
      "hm": "4rem",
      "xl": "3.375rem",
      "h1": "2.25rem",
      "h2": "1.5rem",
      "h3": "1.25rem",
      "h4": "1rem",
      "s": "0.875rem",
    },
  },
  plugins: [],
} satisfies Config;
