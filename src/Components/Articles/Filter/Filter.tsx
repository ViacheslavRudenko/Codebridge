import { Box, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import Search from "./FilterItem";

const Filter = (): ReactElement => {
  const data = useSelector((state: RootState) => state.Articles.data);
  const [value, setValue] = useState<string>("");
  return (
    <Box className="search">
      <Typography variant="subtitle1">Filter by keywords</Typography>
      <Box pt={1} pb={4}>
        <Search value={value} setValue={setValue} /> {/* input*/}
      </Box>
      <Typography variant="subtitle1" className="search__result">
        {value ? `Results: ${data.length}` : null}
      </Typography>
    </Box>
  );
};

export default Filter;
