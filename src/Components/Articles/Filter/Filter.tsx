import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import Search from "./FilterItem";

const Filter = (): ReactElement => {
  return (
    <Box className="search">
      <Typography variant="subtitle1">Filter by keywords</Typography>
      <Box pt={1} pb={4}>
        <Search /> {/* input*/}
      </Box>
      <Typography variant="subtitle1" className="search__result">
        {/* {query ? `Results: ${data.length}` : null} */}
      </Typography>
    </Box>
  );
};

export default Filter;
