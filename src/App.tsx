import { Stack } from "@mui/material";
import React from "react";
import Routing from "./Components/Routing/Routing";

const App = () => {
  return (
    <Stack maxWidth={1280} minWidth={320} margin="0 auto">
      <Routing />
    </Stack>
  );
};

export default App;
