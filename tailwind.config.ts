import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        graphite: "#171717",
        steel: "#8b929c",
        fog: "#f4f4f1",
        volt: "#d7ff38",
        signal: "#ff4d1d"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        lift: "0 24px 80px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
