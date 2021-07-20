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
                "hamburger-down": "rgb(136, 142, 168)",
                "warning": "#E2A03F",
                "success-light": "#DDF5F0",
                "primary-lite": "#EAF1FF",
                "warning-light": "#FFF9ED",
            },
            boxShadow: {
                success: '0 10px 15px -3px #D3F2EC, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                primary: '0 10px 15px -3px #C3CDFA, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                warning: '0 10px 15px -3px #F6E1C2, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',

            },
            outline: {
                "button-success": ['2px solid rgb(26, 188, 156)', '1px'],
                "button-primary": ['2px solid #4361EE', '1px'],
                "button-warning": ['2px solid #E2A03F', '1px'],
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
                "header": "54px",
                "51": "51px"
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
        extend: { outline: ['hover', 'active'], },
    },
    plugins: [],
}