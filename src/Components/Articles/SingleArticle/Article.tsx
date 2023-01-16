import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import { ArticlesItemPropsType } from "../../../types/components";
import ContentBox from "./ArticleContent/ArticleContent";

const Article = ({ article }: ArticlesItemPropsType): ReactElement => {
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
      <Grid width="100%" p={9} position="relative">
        <ContentBox article={article} isMainPage={false} />
      </Grid>
    </Grid>
  );
};

export default Article;
