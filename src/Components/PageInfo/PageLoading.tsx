import { CircularProgress, Grid } from "@mui/material";

const PageLoading = () => {
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
