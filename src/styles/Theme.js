const theme = {
    colors: {
        white: "#fff",
        primary: "#FF2D55",
        border: "rgba(255, 255, 255, 0.1)",
        grey100: "rgba(32, 37, 43, 0.6)",
        greywhite: "#A6ADB5",
        greyDark: "#20252B",
        darkGrey100: "#353B42",
    },

    font: {
        family: "Mulish, sans-serif",
        mulish: "Mulish, sans-serif",
        montserrat: "Montserrat, sans-serif",
        weight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
        },
    },

    media: {
        md: 922,
        sm: 500,
        lg: 1092,
        xl: 1368,
    },

    utils: {
        toRgba: (hex, opacity = 1) => {
            hex = hex.slice(1, hex.length)

            if (hex.length !== 6) {
                throw new Error("Only six-digit hex colors are allowed.")
            }

            var aRgbHex = hex.match(/.{1,2}/g)
            var aRgb = [
                parseInt(aRgbHex[0], 16),
                parseInt(aRgbHex[1], 16),
                parseInt(aRgbHex[2], 16),
            ]
            return `rgba(${[...aRgb, opacity].join(",")})`
        },

        border: theme => `border: 1px solid ${theme.colors.border};`,
        gradient:
            "linear-gradient(328.11deg, #05D0C2 12.59%, #2ECB84 53%, #8CE01D 87.41%);",
    },
}

export default theme
