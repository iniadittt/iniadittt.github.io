/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{html,js}",
        "./public/**/*.{html,js}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
                "google-sans-regular": ["google-sans-regular", "sans-serif"],
            }
        },
    },
    plugins: [],
}