import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArticlesItemPropsType } from "../../../types/components";
import "./index.scss";

const Article = ({ article }: ArticlesItemPropsType) => {
  return (
    <Box className="single">
      <Box className="single__imgBox">
        <Box
          component="img"
          style={{
            backgroundImage: `url(${article.imageUrl})`,
          }}
        ></Box>
      </Box>
      <Box className="single__content">
        <Typography variant="h6">{article.title}</Typography>
        <Typography>{article.summary}</Typography>
        <Link to="/articles">Back to homepage</Link>
      </Box>
    </Box>
  );
};

export default Article;
