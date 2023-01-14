import React, { FunctionComponent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Box, FormControl, InputAdornment, TextField } from "@mui/material";

const Search: FunctionComponent = () => {
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    console.log("clicked the clear icon...");
  };

  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        className="search__item"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
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
