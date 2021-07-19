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
                "hamburger": "#3b3f5c",
                "header": "#FAFAFA",
                "body": "#E2E5EB",
                "button-border": "rgb(211, 211, 211)",
                "hamburger-down": "rgb(136, 142, 168)"
            },
            fontSize: {
                "4.5xl": "2.5rem",
                "15": "15px",
                "13": "13px",
                "14": "14px"
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
                "header": "54px"
            },
            spacing: {
                "online-status": "5px",
                "online-right": "2px",
                "dropdown": "6px"
            },
            lineHeight: {
                "0": "0px"
            },
            width: {
                "180": "180px",
                "370": "370px",
                "115": "115px",
                "255": "255px"
            },
            padding: {
                "10px": "10px",
                "15px": "15px",
                "9px": "9px",
                "35px": "35px",
            },
            screens: {
                "md-lg": "990px",
                "sm-md": "576px"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}