/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                jetBrainsMono: ["JetBrains Mono"],
            },
        },
        colors: {
            red: "#F64A4A",
            white: "#E6E5EA",
            green: "#A4FFAF",
            orange: "#FB7C58",
            yellow: "#F8CD65",
            transparent: "transparent",
            gray: {
                500: "#817D92",
                600: "#24232C",
                700: "#18171F",
                800: "#14131B",
            },
        },
        fontSize: {
            300: ["0.875rem", "1.25"],
            400: ["1rem", "1.313rem"],
            500: ["1.125rem", "1.5rem"],
            600: ["1.5rem", "2rem"],
            700: ["2rem", "2.625rem"],
        },
        screens: {
            xs: "345px",
            sm: "390px",
            md: "640px",
        },
    },
    plugins: [],
};
