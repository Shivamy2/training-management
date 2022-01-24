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
                "body": "#f1f2f3",
                "button-border": "rgb(211, 211, 211)",
                "hamburger-down": "rgb(136, 142, 168)",
                "warning": "#E2A03F",
                "success-light": "#DDF5F0",
                "primary-lite": "#EAF1FF",
                "warning-light": "#FFF9ED",
                "progress-bar": "#EBEDF2",
                "sidebar-elements": "rgb(3, 3, 5)",
                "input": "rgb(59, 63, 92)"
            },
            boxShadow: {
                success: '0 10px 15px -3px #D3F2EC, 0 4px 6px -2px rgba(0, 0, 0, 0)',
                primary: '0 10px 15px -3px #C3CDFA, 0 4px 6px -2px rgba(0, 0, 0, 0)',
                warning: '0 10px 15px -3px #F6E1C2, 0 4px 6px -2px rgba(0, 0, 0, 0)',
                progress: 'rgb(241, 242, 243) 1px 3px 20px 3px',
                stacked: '0px 0px 15px 1px rgb(113 106 202 / 10%)',
                "more-button": 'rgb(208, 208, 208) 0px 0px 20px 0px',
                "sidebar-elements": "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
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
                "14": "14px",
            },
            fontWeight: {
                "medium-semi": "580",
            },
            backgroundImage: (theme) => ({
                authHero: "url('./Images/AuthHero.webp')",
                authHero2: "url('./Images/bodyImage.jpeg')",
            }),
            backgroundSize: {
                heroSize: "75%",
            },
            height: {
                "130": "105vh",
                "navbar": "54.1719px",
                "header": "54px",
                "51": "51px",
            },
            maxWidth: {
                "list-group": "42px",
                "avatar-size": "120px",
                "420": "420px",
            },
            maxHeight: {
                "avatar-size": "120px",
            },
            minHeight: {
                "16": "16px",
                "51": "51px",
                "56": "256px"
            },
            spacing: {
                "online-status": "5px",
                "online-right": "2px",
                "dropdown": "6px",
                "list-group": "42px",
                "menu": "189px",
                "17.5": "17.5px",
                "13px": "13px",
                "228": "228px",
            },
            transitionProperty: {
                'width': 'width',
            },
            lineHeight: {
                "0": "0px"
            },
            width: {
                "180": "180px",
                "370": "370px",
                "115": "115px",
                "260": "260px"
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