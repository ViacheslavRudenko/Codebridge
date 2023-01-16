import { Grid } from "@mui/material";
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
      gap={{ xs: 1, sm: 2, md: 5 }}
      pt={5}
      justifyContent={{ xs: "center", sm: "center", md: "center", lg: "start" }}
    >
      {articles.map((article: Article) => {
        return (
          <Grid
            item
            component="li"
            key={article.id}
            width={400}
            height={530}
            overflow="hidden"
            position="relative"
          >
            <ArticlesItem article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticlesList;
