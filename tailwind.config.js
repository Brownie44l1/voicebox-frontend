/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your existing CSS variables as Tailwind colors
        primary: {
          blue: "rgb(59, 130, 246)",
          purple: "rgb(139, 92, 246)",
        },
        status: {
          pending: "rgb(234, 179, 8)",
          progress: "rgb(59, 130, 246)",
          resolved: "rgb(34, 197, 94)",
          closed: "rgb(107, 114, 128)",
        },
        priority: {
          low: "rgb(34, 197, 94)",
          medium: "rgb(234, 179, 8)",
          high: "rgb(249, 115, 22)",
          critical: "rgb(239, 68, 68)",
        },
      },
    },
  },
  plugins: [],
};
