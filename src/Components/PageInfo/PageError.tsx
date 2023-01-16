import { Alert, Grid } from "@mui/material";
import { ReactElement, useState } from "react";
import { PageErrPropsType } from "../../types/components";

const PageError = ({
  content,
  type = "error",
}: PageErrPropsType): ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const hideAlertModal = (): void => {
    setIsShow(false);
  };

  return isShow ? (
    <Grid justifyContent="end" container alignContent="start">
      <Alert onClose={hideAlertModal} severity={type}>
        {content}
      </Alert>
    </Grid>
  ) : (
    <></>
  );
};

export default PageError;
