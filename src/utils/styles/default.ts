import { createTheme } from "@mui/material";

const style = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        allVariants: {
            color: "rgba(54, 54, 54, 0.8)",
            fontWeight: 400,
            margin: 0,
            fontSize: 16,
        },
        h6: {
            fontSize: 24,
            lineHeight: 3
        },
        button: {
            fontWeight: 700,
            color: "#363636",
            textTransform: "none",
            fontSize: 16,
        },
        subtitle2: {
            color: "#363636",
        },
    },
    palette: {
        primary: { main: "rgba(54, 54, 54, 0.8)" }
    }
});

export default style 