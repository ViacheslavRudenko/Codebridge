import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import ArticlesItem from "./ArticlesItem";
import "./index.scss";

const ArticlesList = () => {
  const articles = useSelector((state: RootState) => state.Articles.data);
  return (
    <Grid
      container
      component="ul"
      gap={{ xs: 1, sm: 2, md: 5 }}
      className="list"
    >
      {articles.map((article) => {
        return (
          <Grid item component="li" key={article.id} className="list__item">
            <ArticlesItem article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticlesList;
