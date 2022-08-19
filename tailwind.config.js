module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slideUp: {
                    '0%': { transform: 'translateY(0%)', opacity: '0' },
                    '40%': { transform: 'translateY(-50%)', opacity: '100' },
                    '100%': { transform: 'translateY(-50%)', opacity: '0' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(0%)', opacity: '0' },
                    '40%': { transform: 'translateY(50%)', opacity: '100' },
                    '100%': { transform: 'translateY(50%)', opacity: '0' },
                },
            },
            animation: {
                topFade: 'slideUp 5.5s ease-out',
                bottomFade: 'slideDown 5.5s ease-out',
            },
        },
    },
    plugins: [],
};
