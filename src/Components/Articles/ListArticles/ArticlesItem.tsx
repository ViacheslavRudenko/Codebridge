import { Box } from "@mui/material";
import { ReactElement } from "react";
import { ArticlesItemPropsType } from "../../../types/components";
import ContentBox from "../SingleArticle/ArticleContent/ArticleContent";

const ArticlesItem = ({ article }: ArticlesItemPropsType): ReactElement => {
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
