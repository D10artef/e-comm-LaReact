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
                // primary: "#334156",

                // secondary: "#4F5470",

                // accent: "#FB923C",
                // "accent-secondary": "#f97316",

                primary: "#212738",
                secondary: "#2F4858",
                accent: "#4F46E5",
                "accent-secondary": "#E11D48",
                "white-gray": "#E5E5E5",
                "my-neutral": "#737373",
                dark: "#171717",
                light: "#FAFAFA",
                background: "#F6F9FC",
            },
            fontSize: {
                nxs: "0.81rem",
            },
        },
    },
    plugins: [],
};
