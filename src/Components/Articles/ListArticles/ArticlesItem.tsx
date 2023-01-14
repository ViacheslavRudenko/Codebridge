import { Box } from "@mui/material";
import { ArticlesItemPropsType } from "../../../types/components";
import ContentBox from "../SingleArticle/ArticleContent/ArticleContent";
import "./index.scss";

const ArticlesItem = ({ article }: ArticlesItemPropsType) => {
  return (
    <>
      <Box
        component="img"
        alt={article.newsSite}
        src={article.imageUrl}
        className="item__img"
      ></Box>
      <ContentBox article={article} />
    </>
  );
};

export default ArticlesItem;
