import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import { ArticlesItemSinglePropsType } from "../../../types/components";
import ContentBox from "../ArticleContent/ArticleContent";

const Article = ({ article }: ArticlesItemSinglePropsType): ReactElement => {
  return (
    <Grid>
      {/* Background image */}
      <Box height={150}>
        <Box
          component="img"
          width="100vw"
          height={300}
          position="absolute"
          top={0}
          right={0}
          left={0}
          zIndex={-1}
          className="bg-img"
          style={{
            backgroundImage: `url(${article.imageUrl})`,
          }}
        ></Box>
      </Box>

      {/* Article content */}
      <Grid width="100%" paddingX={9} paddingY={4} position="relative">
        <ContentBox
          title={article.title}
          description={article.summary}
          linkTo={`/articles`}
          isMainPage={false}
        />
      </Grid>
    </Grid>
  );
};

export default Article;
