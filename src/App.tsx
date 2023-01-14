import { Stack } from "@mui/material";
import React from "react";
import Routing from "./Components/Routing/Routing";
import "./utils/styles/index.scss";

const App = () => {
  return (
    <Stack className="container-box">
      <Routing />
    </Stack>
  );
};

export default App;
