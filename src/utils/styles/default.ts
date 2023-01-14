import { createTheme } from "@mui/material";

const style = createTheme({
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        allVariants: {
            //color: "rgba(54, 54, 54, 0.8)",
            fontWeight: 400,
            fontSize: 16,
        },

    }
});

export default style 