import { Alert, Grid } from "@mui/material";
import { useState } from "react";
import { PageErrPropsType } from "../../types/components";

const PageError = ({ content, type = "error" }: PageErrPropsType) => {
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
