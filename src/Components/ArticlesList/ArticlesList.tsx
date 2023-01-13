import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = () => {
  const articles = useSelector((state: RootState) => state.Articles.data);

  return (
    <Grid component="ul">
      {articles.map((article) => {
        return (
          <Box component="li" key={article.id}>
            <ArticlesItem article={article} />
          </Box>
        );
      })}
    </Grid>
  );
};

export default ArticlesList;
