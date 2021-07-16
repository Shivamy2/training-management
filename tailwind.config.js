module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#476AEE",
            },
            fontSize: {
                "4.5xl": "2.5rem",
            },
            fontWeight: {
                "medium-semi": "570",
            },
            backgroundImage: (theme) => ({
                authHero: "url('./Images/AuthHero.webp')",
            }),
            backgroundSize: {
                heroSize: "75%",
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [],
}