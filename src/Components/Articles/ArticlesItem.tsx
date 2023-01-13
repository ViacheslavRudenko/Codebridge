import { Box, Stack, Typography } from "@mui/material";
import { ArticlesItemPropsType } from "../../types/components";
import { getDate } from "./extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "./index.scss";
import { Link } from "react-router-dom";

const ArticlesItem = ({ article }: ArticlesItemPropsType) => {
  const ContentBox = () => {
    return (
      <>
        <Stack direction="row">
          <CalendarTodayIcon fontSize="small" sx={{ color: "primary.main" }} />
          <Typography variant="body2" pl={1} component="span">
            {getDate(article.publishedAt)}
          </Typography>
        </Stack>
        <Typography variant="h6" className="item__title">
          {article.newsSite}
        </Typography>
        <Typography>{article.summary}</Typography>
        <Box pt={3}>
          <Link to={`/articles/${article.id}`}>
            <Typography variant="button">Read more &rarr;</Typography>
          </Link>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box
        component="img"
        alt={article.newsSite}
        src={article.imageUrl}
        className="item__img"
      ></Box>
      <Box p={3}>
        <ContentBox />
      </Box>
    </>
  );
};

export default ArticlesItem;
