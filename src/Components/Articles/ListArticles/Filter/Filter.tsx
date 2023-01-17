import { Box, Typography } from "@mui/material";
import { ReactElement, useState } from "react";

import Search from "./FilterItem";

const Filter = (): ReactElement => {
  const [result, setResult] = useState<number>(0);

  return (
    <Box className="search">
      <Typography variant="subtitle1">Filter by keywords</Typography>
      <Box pt={1} pb={4}>
        <Search setResult={setResult} /> {/* input*/}
      </Box>
      <Typography variant="subtitle1" className="search__result">
        Results: {result}
      </Typography>
    </Box>
  );
};

export default Filter;
