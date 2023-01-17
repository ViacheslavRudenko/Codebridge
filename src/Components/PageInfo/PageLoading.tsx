import { CircularProgress, Stack } from "@mui/material";
import { ReactElement } from "react";

const PageLoading = (): ReactElement => {
  return (
    <Stack position={"absolute"} top="50%" left="50%">
      <CircularProgress />
    </Stack>
  );
};

export default PageLoading;
