import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary":"#E8C876",
        "primary":"#E8BE68",
        "border-color":"#BFBFBF",
        "bg-color": "#e3e3e3",
        foreground: "var(--foreground)",
      },
      screens: {
        // Define breakpoints with `max` for desktop-first
        'lg': '1024px', // Desktop styles default
        'md': { 'max': '1023px' }, // Medium screens and below
        'sm': { 'max': '767px' },  // Small screens and below
      },
      fontFamily:{
        "Inter":["Inter"],
        "Nunito":['Nunito']
      }
    },
  },
  plugins: [],
} satisfies Config;
