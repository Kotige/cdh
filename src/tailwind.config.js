/** @type {import('tailwindcss').Config} */
export default {
    content: [
            "./index.html", 
            "./src/**/*.{js,jsx,ts,tsx}"
        ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            },
        extend: {
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
