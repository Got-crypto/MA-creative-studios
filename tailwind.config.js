/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('images/running-white-dudes.jpg')",
        engineering: "url('images/engineering.jpg')",
        handshake: "url('images/handshake.jpg')",
        revenue: "url('images/revenue.jpg')",
        relationship: "url('images/relationship.jpg')",
        brand: "url('images/brand.jpg')",
        thumb: "url('images/thumb-up.jpg')",
        marvin: "url('images/marvin.jpg')",
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