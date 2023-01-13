import { Box } from "@mui/material";
import { ArticlesItemPropsType } from "../../types/components";

const ArticlesItem = ({ article }: ArticlesItemPropsType) => {
  return (
    <Box>
      <Box>{article.id}</Box>
    </Box>
  );
};

export default ArticlesItem;
