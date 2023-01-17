import React, { ReactElement, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { useActions } from "../../../utils/hooks/useActions";
import { getArticles } from "../../../api/articles";
import { useFuse } from "../../../utils/hooks/features/useFuse";
import FuseHighlight from "./FuseHighlight";

const Search = (): ReactElement => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const articles = useSelector((state: RootState) => state.Articles.data);
  const { hits, query, setQuery, onSearch } = useFuse(articles, {
    keys: ["title", "summary"],
    includeMatches: true,
    matchAllOnEmptyQuery: true,
  });

  // action when you print sth
  const handleChange = (): void => {
    const isInputEmpty: boolean = query === "";
    setShowClearIcon(isInputEmpty ? "none" : "flex");
  };

  //clean search input
  const handleClick = (): void => {
    setQuery("");
  };

  return (
    <FormControl>
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search..."
        value={query}
        //onKeyUp={onSearch}
        onChange={(e) => {
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

      {hits.map((hit: any) => (
        <li key={hit.refIndex}>
          <FuseHighlight hit={hit} attribute="title" />
        </li>
      ))}
    </FormControl>
  );
};

export default Search;
