import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArticlesItemPropsType } from "../../../../types/components";
import { getDate } from "../../extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ContentBox = ({ article, isMainPage = true }: ArticlesItemPropsType) => {
  return (
    <Box p={3}>
      {isMainPage ? (
        <Stack direction="row">
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">
            {getDate(article.publishedAt)}
          </Typography>
        </Stack>
      ) : null}
      <Typography variant="h6">{article.newsSite}</Typography>
      <Typography>{article.summary}</Typography>
      <Box pt={3}>
        <Link to={`/articles/${article.id}`} className="link">
          <Typography>
            {isMainPage ? `Read more ->` : "<- Back to homepage"}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ContentBox;
