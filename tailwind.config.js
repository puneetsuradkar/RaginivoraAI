/** @type {import('tailwindcss').Config} */
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        surface: "var(--surface)",
        border: "var(--border)",
      },
      backgroundImage: {
        "gradient-ai": "var(--gradient-ai)",
        "gradient-glow": "var(--gradient-glow)",
      },
      animation: {
        shine: "shine 3s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "0% center" },
          "100%": { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [],
};
