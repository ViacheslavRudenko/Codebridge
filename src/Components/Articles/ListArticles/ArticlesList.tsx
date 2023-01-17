import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { Article } from "../../../types/article";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = (): ReactElement => {
  const articles = useSelector((state: RootState) => state.Articles.data);
  return (
    <Grid
      container
      component="ul"
      gap={{ xs: 1, sm: 2, md: 3 }}
      className="list"
    >
      {articles.map((article: Article) => {
        return (
          <Grid
            item
            component="li"
            key={article.id}
            className="list__item item"
          >
            <ArticlesItem article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticlesList;
