/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'sm': { 'max': '600px' },
            'md': { 'min': '600px', 'max': '750px' },
            'lg': { 'min': '750px', 'max': '1400px' },
            'xl': { 'min': '1400', 'max': '2400px' }
        },
        extend: {},
    },
    plugins: [],
}

