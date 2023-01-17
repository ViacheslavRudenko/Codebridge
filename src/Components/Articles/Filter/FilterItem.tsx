import React, { ReactElement, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { useFuse } from "../../../utils/hooks/features/useFuse";
import { useActions } from "../../../utils/hooks/useActions";

const Search = (): ReactElement => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const articles = useSelector((state: RootState) => state.Articles.data);
  const { filteredArticles } = useActions();
  const [value, setValue] = useState<string>("");

  const { hits, query, setQuery, onSearch } = useFuse(articles, {
    keys: ["title", "summary"],
    includeMatches: true,
    matchAllOnEmptyQuery: true,
    minMatchCharLength: 2,
    useExtendedSearch: true,
  });

  useEffect(() => {
    filteredArticles(hits);
  }, [hits]);

  // action when you print sth
  const handleChange = (): void => {
    const isInputEmpty: boolean = query === "";
    setShowClearIcon(isInputEmpty ? "none" : "flex");
  };

  //clean search input
  const handleClick = (): void => {
    setQuery("");
    setValue("");
  };

  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e);
          handleChange();
        }}
        className="search__input"
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
