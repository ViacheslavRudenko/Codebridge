import { Grid, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../../api/articles";
import { RootState } from "../../../store/root-reducer";
import { Article } from "../../../types/article";
import { useActions } from "../../../utils/hooks/useActions";
import PageLoading from "../../PageInfo/PageLoading";
import PageError from "../../PageInfo/PageError";
import ArticlesItem from "./ArticlesItem";

const ArticlesList = (): ReactElement => {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData(getArticles());
  }, []);

  const { data, err, loading } = useSelector(
    (state: RootState) => state.Articles
  );

  return (
    <>
      {err ? (
        //if error
        <PageError content={err} />
      ) : loading ? (
        //if page loading
        <PageLoading />
      ) : data.length ? (
        //add content
        <Grid
          container
          component="ul"
          gap={{ xs: 1, sm: 2, md: 5 }}
          pt={5}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "start",
          }}
        >
          {data.map((article: Article) => {
            return (
              <Grid
                item
                component="li"
                key={article.id}
                width={400}
                height={530}
                overflow="hidden"
                position="relative"
              >
                <ArticlesItem article={article} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        // No available articles
        <Typography textAlign="center" pt={10}>
          According to searching, there are no available articles!!
        </Typography>
      )}
    </>
  );
};

export default ArticlesList;
