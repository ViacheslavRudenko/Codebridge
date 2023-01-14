import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";

const Filter = () => {
  const data = useSelector((state: RootState) => state.Articles.data);

  return (
    <Box>
      <Typography>Filter by keywords</Typography>

      <Typography>Results: {data.length}</Typography>
    </Box>
  );
};

export default Filter;
