import { Box } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../api/articles";
import Filter from "../../Components/Articles/Filter/Filter";
import ArticlesList from "../../Components/Articles/ListArticles/ArticlesList";
import PageError from "../../Components/PageInfo/PageError";
import PageLoading from "../../Components/PageInfo/PageLoading";
import { RootState } from "../../store/root-reducer";

const ArticlesPage = (): ReactElement => {
  return (
    <Box pt={6} pb={7}>
      <Filter />
      <ArticlesList />
    </Box>
  );
};

export default ArticlesPage;
