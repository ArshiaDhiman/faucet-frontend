module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        textColor: (theme) => ({
            ...theme("colors"),
            main: "#141414",
            "level-one": "#262626",
            accent: "#e67954",
            "accent-light": "#f3c6b6",
            "accent-dark": "#883114",
        }),
        backgroundColor: (theme) => ({
            ...theme("colors"),
            main: "#141414",
            "level-one": "#262626",
            accent: "#e67954",
            "accent-light": "#f3c6b6",
            "accent-dark": "#883114",
        }),
        borderColor: (theme) => ({
            ...theme("colors"),
            main: "#141414",
            "level-one": "#262626",
            accent: "#e67954",
            "accent-light": "#f3c6b6",
            "accent-dark": "#883114",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
