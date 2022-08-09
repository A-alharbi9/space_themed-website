module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '40%': { transform: 'translateY(-45%)', opacity: '100' },
          '100%': { transform: 'translateY(-45%)', opacity: '0' },
        },
      },
      animation: {
        fade: 'slide 4.5s ease-out',
      },
    },
  },
  plugins: [],
};
