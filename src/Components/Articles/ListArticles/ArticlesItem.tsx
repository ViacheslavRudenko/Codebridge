import { Box, Stack } from "@mui/material";
import { ReactElement } from "react";
import { ArticlesItemPropsType } from "../../../types/components";
import ContentBox from "../SingleArticle/ArticleContent/ArticleContent";

const ArticlesItem = ({ article }: any): ReactElement => {
  return (
    <>
      {/* img of article*/}
      <Box
        component="img"
        alt={article.item.newsSite}
        src={article.item.imageUrl}
        width={400}
        height={217}
        boxSizing="content-box"
      ></Box>

      {/* constent of article*/}
      <Stack p={3} position="relative">
        <ContentBox article={article} />
      </Stack>
    </>
  );
};

export default ArticlesItem;
