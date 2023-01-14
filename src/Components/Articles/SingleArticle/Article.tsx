import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArticlesItemPropsType } from "../../../types/components";
import ContentBox from "./ArticleContent/ArticleContent";

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
      <ContentBox article={article} isMainPage={false} />
    </Box>
  );
};

export default Article;
