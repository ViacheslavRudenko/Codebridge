import { Stack } from "@mui/material";
import React from "react";
import Routing from "./Components/Routing/Routing";
import "./utils/styles/index.scss";

const App = () => {
  return (
    <Stack minWidth={320} maxWidth={1280} margin="0 auto">
      <Routing />
    </Stack>
  );
};

export default App;
