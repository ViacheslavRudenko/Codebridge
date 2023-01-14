import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArticlesItemPropsType } from "../../../../types/components";
import { getDate } from "../../extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ContentBox = ({ article }: ArticlesItemPropsType) => {
  return (
    <Box p={3}>
      <Stack direction="row">
        <CalendarTodayIcon fontSize="small" className="item__icon" />
        <Typography variant="body2" pl={1} component="span">
          {getDate(article.publishedAt)}
        </Typography>
      </Stack>
      <Typography variant="h6" className="item__title">
        {article.newsSite}
      </Typography>
      <Typography>{article.summary}</Typography>
      <Box pt={3}>
        <Link to={`/articles/${article.id}`} className="link">
          <Typography>Read more &rarr;</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ContentBox;
