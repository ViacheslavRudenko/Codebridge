import { createTheme } from "@mui/material";

const style = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
        fontWeightMedium: 400,
        subtitle1: {
            fontWeight: 600,
            color: 'rgba(54, 54, 54, 1)',
        },
        subtitle2: {
            color: 'rgba(54, 54, 54, 0.8)',
            lineHeight: 1
        },
        h6: {
            color: 'rgba(54, 54, 54, 0.8)',
            fontSize: 24,
            lineHeight: 1
        },
        body1: {
            color: 'rgba(54, 54, 54, 0.7)',
            fontSize: 14
        }
    },

    palette: {
        primary: {
            main: 'rgba(54, 54, 54, 0.7)',
        },
        secondary: {
            main: 'rgba(54, 54, 54, 1)',
        },
    },
});

export default style 