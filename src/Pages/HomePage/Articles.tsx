import { Box } from "@mui/material";
import { ReactElement } from "react";
import Filter from "../../Components/Articles/ListArticles/Filter/Filter";
import ArticlesList from "../../Components/Articles/ListArticles/ArticlesList";

const ArticlesPage = (): ReactElement => {
  return (
    <Box paddingY={6} paddingX={2}>
      <Filter />
      <ArticlesList />
    </Box>
  );
};

export default ArticlesPage;
