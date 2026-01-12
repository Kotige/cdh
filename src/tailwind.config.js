/** @type {import('tailwindcss').Config} */
export default {
    content: [
            "./index.html", 
            "./src/**/*.{js,jsx,ts,tsx}"
        ],
    theme: {
        extend: {
            colors: {
                highlight: "#A67152",
            },
            spacing: {
                container: "1.5rem",
            },
            fontFamily: {
                serif: ["Lora", "serif"],
                sans: ["Inter","sans-serif"],
            }
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};
