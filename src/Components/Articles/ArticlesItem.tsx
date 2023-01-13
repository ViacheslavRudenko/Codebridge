import { Box, Button, Stack, Typography } from "@mui/material";
import { ArticlesItemPropsType } from "../../types/components";
import { getDate } from "./extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ArticlesItem = ({ article }: ArticlesItemPropsType) => {
  const ContentBox = () => {
    return (
      <>
        <Stack direction="row">
          <CalendarTodayIcon fontSize="small" sx={{ color: "grey" }} />
          <Typography variant="body2" pl={1} component="span">
            {getDate(article.publishedAt)}
          </Typography>
        </Stack>
        <Typography variant="h6" textTransform="uppercase">
          {article.newsSite}
        </Typography>
        <Typography>{article.summary}</Typography>
        <Box pt={3}>
          <Button
            sx={{
              padding: "0",
              textTransform: "none",
            }}
          >
            <Typography variant="button">Read more &rarr;</Typography>
          </Button>
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
        sx={{
          width: "100%",
          height: "217px",
        }}
      ></Box>
      <Box p={3}>
        <ContentBox />
      </Box>
    </>
  );
};

export default ArticlesItem;
