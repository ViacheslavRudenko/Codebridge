import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArticlesItemPropsType } from "../../../../types/components";
import { getDate, trimText } from "../../extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ContentBox = ({ article, isMainPage = true }: ArticlesItemPropsType) => {
  return (
    <Box className="content">
      {isMainPage ? (
        <Stack direction="row" className="content__date">
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">
            {getDate(article.publishedAt)}
          </Typography>
        </Stack>
      ) : null}
      <Typography variant="h6" className="content__title">
        {article.newsSite}
      </Typography>
      <Typography className="content__text">
        {isMainPage ? trimText(article.summary) : article.summary}
      </Typography>
      <Box className="content__btn">
        <Link
          to={isMainPage ? `/articles/${article.id}` : `/articles`}
          className="link"
        >
          <Typography>
            {isMainPage ? `Read more ->` : "<- Back to homepage"}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ContentBox;
