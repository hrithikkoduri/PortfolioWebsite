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
        'card-bg': "var(--card-bg)",
        'card-border': "var(--card-border)",
        'text-primary': "var(--text-primary)",
        'text-secondary': "var(--text-secondary)",
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
} satisfies Config;
