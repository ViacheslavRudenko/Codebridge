import { Box, Stack } from "@mui/material";
import { ReactElement } from "react";
import { ArticlesItemHomePropsType } from "../../../types/components";
import { getDate } from "../extra/functions";
import FuseHighlight from "../Filter/FuseHighlight";
import ContentBox from "../SingleArticle/ArticleContent/ArticleContent";

const ArticlesItem = ({ article }: ArticlesItemHomePropsType): ReactElement => {
  const title = <FuseHighlight hit={article} attribute="title" />;
  const description = <FuseHighlight hit={article} attribute="summary" />;

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
        <ContentBox
          date={getDate(article.item.publishedAt)}
          title={title}
          description={description}
          linkTo={`/articles/${article.item.id}`}
          isMainPage={true}
        />
      </Stack>
    </>
  );
};

export default ArticlesItem;
