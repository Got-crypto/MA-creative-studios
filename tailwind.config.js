/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('images/running-white-dudes.jpg')",
        engineering: "url('images/optimized-costeffective.jpg')",
        handshake: "url('images/optimized-subs.jpg')",
        revenue: "url('images/optimized-revenue.jpg')",
        relationship: "url('images/optimized-handshake.jpg')",
        brand: "url('images/optimized-brands.jpg')",
        thumb: "url('images/thumb-up.jpg')",
        marvin: "url('images/optimized-newsletter.jpg')",
        gallery1: "url('images/OD/gallery-1.jpg')",
        gallery2: "url('images/OD/gallery-2.jpg')",
        gallery3: "url('images/OD/gallery-3.jpg')",
        gallery4: "url('images/OD/gallery-4.jpg')",
      },
      fontFamily: {
        hero: "'Alfa Slab One', cursive",
        regular: "'Lora', serif;",
      },
      colors: {
        primary: '#FFC300',
      },
    },
  },
  plugins: [],
}