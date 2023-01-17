import { Alert, Stack } from "@mui/material";
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
    <Stack position={"absolute"} top={40} right={20}>
      <Alert onClose={hideAlertModal} severity={type}>
        {content}
      </Alert>
    </Stack>
  ) : (
    <></>
  );
};

export default PageError;
