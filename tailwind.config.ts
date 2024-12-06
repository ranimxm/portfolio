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
      "xxl": ["6.75rem", "auto"],
      "xl": ["3.375rem", "auto"],
      "h1": ["2.25rem", "auto"],
      "h2": ["1.5rem", "auto"],
      "h3": ["1.25rem", "auto"],
      "h4": ["1rem", "auto"],
      "s": ["0.875rem", "auto"],

    },
  },
  plugins: [],
} satisfies Config;
