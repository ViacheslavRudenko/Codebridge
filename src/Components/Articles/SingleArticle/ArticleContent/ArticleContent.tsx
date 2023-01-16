import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArticlesItemPropsType } from "../../../../types/components";
import { getDate, trimText } from "../../extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { ReactElement } from "react";

const ContentBox = ({
  article,
  isMainPage = true,
}: ArticlesItemPropsType): ReactElement => {
  return (
    <>
      {/* Date of article */}
      {isMainPage ? (
        <Stack direction="row">
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body1" pl={1}>
            {getDate(article.publishedAt)}
          </Typography>
        </Stack>
      ) : (
        <></>
      )}

      {/* Title of article */}
      <Typography variant="h6" paddingY={2}>
        {article.title}
      </Typography>

      {/* Description of article */}
      <Typography paddingY={3} variant="subtitle2">
        {isMainPage ? trimText(article.summary) : article.summary}
      </Typography>

      {/* Link  */}
      <Box>
        <Link
          to={isMainPage ? `/articles/${article.id}` : `/articles`}
          className="link"
        >
          <Typography
            position="absolute"
            top={isMainPage ? 260 : undefined}
            bottom={!isMainPage ? -80 : undefined}
          >
            {isMainPage ? `Read more ->` : "<- Back to homepage"}
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default ContentBox;
