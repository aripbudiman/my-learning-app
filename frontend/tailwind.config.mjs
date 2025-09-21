/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        erieblack:"#111827",
        persimmon: "#EA580C",
        blueviolet:"#9333EA",
        paleviolet:"#c084fc",
        greenpigment:"#16A34A",
        emerald:"#4ADE80",
        crayola:"#2563EB",
        card: {
          foreground: 'var(--card-foreground)',
          background: 'var(--card-background)',
        }
      },
    },
  },
  plugins: [],
}
