/** @type {import('tailwindcss').Config} */
export default {
  // Yahan hum Tailwind ko batate hain ki kaunse files mein classes use ho rahi hain
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom font family add kar rahe hain Google Fonts se
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
