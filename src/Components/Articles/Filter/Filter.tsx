import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import Search from "./FilterItem";

const Filter = (): ReactElement => {
  const data = useSelector((state: RootState) => state.Articles.data);

  return (
    <Box className="search">
      <Typography variant="subtitle1">Filter by keywords</Typography>
      <Box pt={1} pb={4}>
        <Search /> {/* input*/}
      </Box>
      <Typography variant="subtitle1" className="search__result">
        Results: {data.length}
      </Typography>
    </Box>
  );
};

export default Filter;
