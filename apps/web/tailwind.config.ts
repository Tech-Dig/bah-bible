import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bah: {
          bg: "#0B0B0C",
          panel: "#121214",
          panel2: "#17171A",
          text: "#ECE9E4",
          muted: "#B9B3AA",
          ember: "#D46A2D",
          ember2: "#F39B4A",
          line: "#26262B",
          danger: "#E24A4A",
          ok: "#4ADE80"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px"
      }
    }
  },
  plugins: []
} satisfies Config;