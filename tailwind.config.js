/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#611CE1",
        biyar_purple: "#6F23FF",
        purple_100: "#321578",
        secondary: "#1E1F24",
        gray_100: "#EFF0F3",
        gray_200: "#F8F8FF",
        gray_300: "#62636C",
        gray_400: "#FCFCFD",
        gray_500: "#8B8D98",
        gray_600: "#313131",
        gray_700: "#636363",
        gray_800: "#BBBBBB",
        gray_900: "#F9F9F9",
        gray_1000: "rgba(0, 0, 0, 0.02)",
        gray_1100: "#D9D9D9",
        gray_1200: "#020617",
        gray_1300: "#E2E8F0",
        muted: "#64748B",
        muted: "#020617",
        purple_100: "#BBB3FF",
      },
    },
  },
  plugins: [],
};
