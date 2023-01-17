import { ReactElement, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { useFuse } from "../../../utils/hooks/features/useFuse";
import { useActions } from "../../../utils/hooks/useActions";
import { SearchPropsType } from "../../../types/components";

const Search = ({ setResult }: SearchPropsType): ReactElement => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const articles = useSelector((state: RootState) => state.Articles.data);
  const { filteredArticles } = useActions();
  const [value, setValue] = useState<string>("");

  const { hits, query, setQuery, onSearch } = useFuse(articles, {
    keys: ["title", "summary"],
    includeMatches: true,
    matchAllOnEmptyQuery: true,
    minMatchCharLength: value.length < 4 ? 0 : 4,
    useExtendedSearch: true,
    // limit: 9,
  });

  useEffect(() => {
    filteredArticles(hits);
    setResult(hits.length);
  }, [hits]);

  // action when you print sth
  const handleChange = (e: any): void => {
    const isInputEmpty: boolean = query === "";
    setShowClearIcon(isInputEmpty ? "none" : "flex");
    setValue(e.target.value);
    onSearch(e);
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
        onChange={handleChange}
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
