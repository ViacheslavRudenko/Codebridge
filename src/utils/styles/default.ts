import { createTheme } from "@mui/material";

const style = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        allVariants: {
            fontWeight: 400,
            fontSize: 16,
        },

    }
});

export default style 