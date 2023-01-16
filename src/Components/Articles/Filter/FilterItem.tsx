import React, { FunctionComponent, ReactElement, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import Fuse from "fuse.js";
import { useActions } from "../../../utils/hooks/useActions";
import { getArticles } from "../../../api/articles";
import { Article } from "../../../types/article";

const Search = (): ReactElement => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [value, setValue] = useState<string>("");
  const articles = useSelector((state: RootState) => state.Articles.data);
  const { axiosData, updateArticles } = useActions();

  const fuse = new Fuse(articles, {
    keys: ["title", "summary"],
    includeScore: true,
    includeMatches: true, // be used for highlighting purposes.
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isInputEmpty: boolean = event.target.value === "";
    setShowClearIcon(isInputEmpty ? "none" : "flex");
    const results = fuse
      .search<Article>(event.target.value)
      .map((character) => character.item);
    updateArticles(results);
    isInputEmpty && axiosData(getArticles());
  };

  const handleClick = (): void => {
    setValue("");
    axiosData(getArticles());
  };

  return (
    <FormControl
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    >
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
