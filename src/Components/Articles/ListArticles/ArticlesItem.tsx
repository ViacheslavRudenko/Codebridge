import { Box } from "@mui/material";
import { ArticlesItemPropsType } from "../../../types/components";
import ContentBox from "../SingleArticle/ArticleContent/ArticleContent";

const ArticlesItem = ({ article }: ArticlesItemPropsType) => {
  return (
    <>
      <Box component="img" alt={article.newsSite} src={article.imageUrl}></Box>
      <ContentBox article={article} />
    </>
  );
};

export default ArticlesItem;
