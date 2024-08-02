module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF69B4',
        'secondary': '#FFA500',
        'accent': '#FFD700',
        'poster-pink': '#FF8FBA',
        'poster-salmon': '#FF9D7D',
        'poster-orange': '#FFA158',
        'poster-yellow': '#FFD700',
      },
      backgroundImage: {
        'gradient-performers': 'linear-gradient(to right, #FF8FBA, #FF9D7D)',
        'gradient-countdown': 'linear-gradient(to right, #FF9D7D, #FFA158)',
        'gradient-tickets': 'linear-gradient(to right, #FFA158, #FFD700)',
      },
      fontFamily: {
        'neat-loud': ['PeoplefirstNeatLoudTTF', 'sans-serif'],
        'gooltokki': ['HSGooltokki', 'sans-serif'],
        'danjo': ['Danjo-bold-Regular', 'sans-serif'],
        'jejudoldam': ['EF_jejudoldam', 'sans-serif'],
      },
    },
  },
  plugins: [],
}