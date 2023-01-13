import { Box, Button, Stack } from "@mui/material";
import { ArticlesItemPropsType } from "../../types/components";
import { getDate } from "./extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { relative } from "path";

const ArticlesItem = ({ article }: ArticlesItemPropsType) => {
  return (
    <>
      <Box
        component="img"
        alt={article.newsSite}
        src={article.imageUrl}
        sx={{ width: "100%", height: "217px" }}
      ></Box>
      <Box p={3}>
        <Stack direction="row">
          <CalendarTodayIcon fontSize="small" sx={{ color: "grey" }} />
          <Box pl={1} component="span">
            {getDate(article.publishedAt)}
          </Box>
        </Stack>
        <Box pt={3} textTransform="uppercase">
          {article.newsSite}
        </Box>
        <Box pt={3.5} pb={3.5}>
          {article.summary}
        </Box>
        <Box>
          <Button
            sx={{
              padding: "0",
              textTransform: "none",
              color: "#363636",
            }}
          >
            Read more &rarr;
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ArticlesItem;
