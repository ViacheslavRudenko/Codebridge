import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = () => {
  const articles = useSelector((state: RootState) => state.Articles.data);
  return (
    <Grid
      container
      component="ul"
      gap={{ xs: 1, sm: 2, md: 5 }}
      p={0}
      justifyContent="center"
    >
      {articles.map((article) => {
        return (
          <Grid item component="li" key={article.id} sx={styles}>
            <ArticlesItem article={article} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticlesList;

const styles = {
  width: "400px",
  border: "1px solid #EAEAEA",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
  borderRadius: "5px",
  listStyle: "none",
};
