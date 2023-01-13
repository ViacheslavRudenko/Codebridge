import { Alert, Button, Grid } from "@mui/material";
import { useState } from "react";

const PageError = ({ content, type = "error" }: any) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const hideAlertModal = () => {
    setIsShow(false);
  };

  return isShow ? (
    <Grid justifyContent="end" container alignContent="start">
      <Alert onClose={hideAlertModal} severity={type}>
        {content}
      </Alert>
    </Grid>
  ) : null;
};

export default PageError;
