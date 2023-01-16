import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import Search from "./FilterItem";

const Filter = (): ReactElement => {
  const data = useSelector((state: RootState) => state.Articles.data);

  return (
    <Box className="container">
      <Typography>Filter by keywords</Typography>
      <Box className="container__search search">
        <Search />
      </Box>
      <Typography className="container__result">
        Results: {data.length}
      </Typography>
    </Box>
  );
};

export default Filter;
