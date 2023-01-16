import { Box } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../api/articles";
import Filter from "../../Components/Articles/Filter/Filter";
import ArticlesList from "../../Components/Articles/ListArticles/ArticlesList";
import PageError from "../../Components/PageInfo/PageError";
import PageLoading from "../../Components/PageInfo/PageLoading";
import { RootState } from "../../store/root-reducer";
import { useActions } from "../../utils/hooks/useActions";

const ArticlesPage = (): ReactElement => {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData(getArticles());
  }, []);

  const { err, loading } = useSelector((state: RootState) => state.Articles);

  return (
    <Box pt={6} pb={7}>
      {err ? (
        <PageError content={err} />
      ) : loading ? (
        <PageLoading />
      ) : (
        <>
          <Filter />
          <ArticlesList />
        </>
      )}
    </Box>
  );
};

export default ArticlesPage;
