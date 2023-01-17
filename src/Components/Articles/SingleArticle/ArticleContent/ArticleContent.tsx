import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getDate, trimText } from "../../extra/functions";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { ReactElement } from "react";
import FuseHighlight from "../../Filter/FuseHighlight";

const ContentBox = ({ article, isMainPage = true }: any): ReactElement => {
  const DateOfArticle = () => {
    return isMainPage ? (
      <Stack direction="row">
        <CalendarTodayIcon fontSize="small" />
        <Typography variant="body1" pl={1}>
          {getDate(article.publishedAt || article.item.publishedAt)}
        </Typography>
      </Stack>
    ) : (
      <></>
    );
  };

  const TitleOfArticle = (): ReactElement => {
    return (
      <Typography variant="h6" paddingY={2}>
        {article.title ? (
          article.title
        ) : (
          <FuseHighlight hit={article} attribute="title" />
        )}
      </Typography>
    );
  };

  const DescriptionOfArticle = (): ReactElement => {
    return (
      <Typography paddingY={3} variant="subtitle2">
        {isMainPage ? (
          article.summary ? (
            trimText(article.summary)
          ) : (
            <FuseHighlight hit={article} attribute="summary" />
          )
        ) : (
          article.summary
        )}
      </Typography>
    );
  };

  const LinkToanotherPage = (): ReactElement => {
    return (
      <Box>
        <Link
          to={
            isMainPage
              ? `/articles/${article.id || article.item.id}`
              : `/articles`
          }
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
    );
  };

  return (
    <>
      <DateOfArticle />
      <TitleOfArticle />
      <DescriptionOfArticle />
      <LinkToanotherPage />
    </>
  );
};

export default ContentBox;
