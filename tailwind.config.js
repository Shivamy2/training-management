module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#476AEE",
                "primary-light": "#E7E8EF",
                navBar: "#0E1726",
                "navBar-light": "rgb(224, 230, 237)",
                "online-status": "rgb(26, 188, 156)",
                "search-icon": "#888ea8",
                "search-box": "#202737",
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
                "130": "105vh",
                "navbar": "54.1719px",
            },
            spacing: {
                "online-status": "5px",
                "online-right": "2px",
            },
            width: {
                "180": "180px",
                "370": "370px",
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