import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { ReactElement } from "react";
import { ContentBoxPropsTYpe } from "../../../types/components";

const ContentBox = ({
  date,
  title,
  description,
  linkTo,
  isMainPage = true,
}: ContentBoxPropsTYpe): ReactElement => {
  const DateOfArticle = () => {
    return date ? (
      <Stack direction="row">
        <CalendarTodayIcon fontSize="small" />
        <Typography variant="body1" pl={1}>
          {date}
        </Typography>
      </Stack>
    ) : (
      <></>
    );
  };

  const TitleOfArticle = (): ReactElement => {
    return (
      <Typography
        variant="h6"
        paddingY={isMainPage ? 2 : 0}
        textAlign={isMainPage ? "start" : "center"}
      >
        {title}
      </Typography>
    );
  };

  const DescriptionOfArticle = (): ReactElement => {
    return (
      <Typography paddingY={3} variant="subtitle2">
        {description}
      </Typography>
    );
  };

  const LinkToanotherPage = (): ReactElement => {
    return (
      <Box>
        <Link to={linkTo} className="link">
          <Typography
            position="absolute"
            top={isMainPage ? 260 : undefined}
            bottom={!isMainPage ? -80 : undefined}
          >
            {isMainPage ? <>Read more &rarr;</> : <> &larr; Back to homepage</>}
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
