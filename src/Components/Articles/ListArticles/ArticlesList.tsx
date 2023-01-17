import { Grid, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../../api/articles";
import { RootState } from "../../../store/root-reducer";
import { FilteredArticles } from "../../../types/article";
import { useActions } from "../../../utils/hooks/useActions";
import PageLoading from "../../PageInfo/PageLoading";
import PageError from "../../PageInfo/PageError";
import ArticlesItem from "./ArticlesItem";
import FuseHighlight from "../Filter/FuseHighlight";

const listGridStyle = {
  xs: "center",
  sm: "center",
  md: "center",
  lg: "start",
};

const ArticlesList = (): ReactElement => {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData(getArticles());
  }, []);

  const { data, err, loading, filteredArticles } = useSelector(
    (state: RootState) => state.Articles
  );

  const DefaultArticlesList = () => {
    return (
      <Grid
        container
        component="ul"
        gap={{ xs: 1, sm: 2, md: 3 }}
        pt={5}
        justifyContent={listGridStyle}
      >
        {filteredArticles.map((hit: FilteredArticles) => {
          return (
            <Grid
              item
              component="li"
              key={hit.item.id}
              width={400}
              height={530}
              overflow="hidden"
              position="relative"
            >
              <ArticlesItem article={hit} />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const NoAvailableArticles = () => {
    return (
      <Typography textAlign="center" pt={10}>
        According to searching, there are no available articles!!
      </Typography>
    );
  };

  return (
    <>
      {err ? (
        <PageError content={err} />
      ) : loading ? (
        <PageLoading />
      ) : data.length ? (
        <DefaultArticlesList />
      ) : (
        <NoAvailableArticles />
      )}
    </>
  );
};

export default ArticlesList;
