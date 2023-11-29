/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            red: "#F64A4A",
            white: "#E6E5EA",
            green: "#A4FFAF",
            orange: "#FB7C58",
            yellow: "#F8CD65",
            gray: {
                500: "#817D92",
                600: "#24232C",
                700: "#18171F",
                800: "#14131B",
            },
        },
    },
    plugins: [],
};
