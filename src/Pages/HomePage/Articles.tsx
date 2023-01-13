import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticles } from "../../api/articles";
import ArticlesItem from "../../Components/Articles/ListArticles/ArticlesItem";
import ArticlesList from "../../Components/Articles/ListArticles/ArticlesList";
import PageError from "../../Components/PageInfo/PageError";
import PageLoading from "../../Components/PageInfo/PageLoading";
import { RootState } from "../../store/root-reducer";
import { useActions } from "../../utils/hooks/useActions";

const ArticlesPage = () => {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData(getArticles());
  }, []);

  const { err, loading } = useSelector((state: RootState) => state.Articles);

  return (
    <Box>
      {err ? (
        <PageError content={err} />
      ) : loading ? (
        <PageLoading />
      ) : (
        <ArticlesList />
      )}
    </Box>
  );
};

export default ArticlesPage;
