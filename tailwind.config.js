/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                card: "var(--color-card)",
                accent: "var(--color-accent)",
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                "muted-foreground": "var(--color-muted-foreground)",
            },
        },
    },
    plugins: [],
};
