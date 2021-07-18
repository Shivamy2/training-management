module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#476AEE",
                "primary-light": "#E7E8EF",
            },
            fontSize: {
                "4.5xl": "2.5rem",
            },
            fontWeight: {
                "medium-semi": "580",
            },
            backgroundImage: (theme) => ({
                authHero: "url('./Images/AuthHero.webp')",
            }),
            backgroundSize: {
                heroSize: "75%",
            },
            height: {
                "130": "105vh"
            },
            screens: {
                "md-lg": "990px"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}