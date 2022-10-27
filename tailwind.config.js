/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        screens: {
            xs: "460px",
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                primary: "#334156",
                secondary: "#4F5470",
                accent: "#FB923C",
                "accent-secondary": "#f97316",
            },
            fontSize: {
                nxs: "0.81rem",
            }
        },
    },
    plugins: [],
};
