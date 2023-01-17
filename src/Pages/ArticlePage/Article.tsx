import { Box } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/articles";
import Article from "../../Components/Articles/SingleArticle/Article";
import PageError from "../../Components/PageInfo/PageError";
import PageLoading from "../../Components/PageInfo/PageLoading";
import { RootState } from "../../store/root-reducer";
import { useActions } from "../../utils/hooks/useActions";

const ArticlesPage = (): ReactElement => {
  const params = useParams();
  const { axiosData } = useActions();

  useEffect(() => {
    params.id && axiosData(getArticle(params.id));
  }, [params]);

  const { data, err, loading } = useSelector(
    (state: RootState) => state.Articles
  );

  return (
    <Box paddingX={2}>
      {err ? (
        <PageError content={err} />
      ) : loading || !data.length ? (
        <PageLoading />
      ) : (
        <Article article={data[0]} />
      )}
    </Box>
  );
};

export default ArticlesPage;
