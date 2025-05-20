/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      dark: "rgb(17 24 39)", // หรือจะใช้ rgba ก็ได้
    },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'], // ฟอนต์หลัก
        orbitron: ['Orbitron', 'sans-serif'], // สำหรับโลโก้หรือหัวเรื่อง
      },
    },
  },
  plugins: [require("daisyui")],
}
