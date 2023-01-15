import React, { FunctionComponent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box, FormControl, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { Article } from "../../../types/article";
import { filteredArticles } from "./functions";

const Search: FunctionComponent = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [value, setValue] = useState<string>("");
  const articles = useSelector((state: RootState) => state.Articles.data);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    console.log(filteredArticles(articles, value));
  };

  const handleClick = (): void => {
    setValue("");
  };

  return (
    <FormControl onChange={(e: any) => setValue(e.target.value)}>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        className="search__item"
        placeholder="Search..."
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              sx={{ cursor: "pointer" }}
              position="end"
              style={{ display: showClearIcon }}
              onClick={handleClick}
            >
              <CloseIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
