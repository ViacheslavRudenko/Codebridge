import { CircularProgress, Grid } from "@mui/material";
import { ReactElement } from "react";

const PageLoading = (): ReactElement => {
  return (
    <Grid
      justifyContent="center"
      container
      alignContent="center"
      height="100vh"
    >
      <CircularProgress />
    </Grid>
  );
};

export default PageLoading;
