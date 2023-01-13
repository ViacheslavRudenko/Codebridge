import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/articles";
import ArticlesItem from "../../Components/Articles/ArticlesItem";
import PageError from "../../Components/PageInfo/PageError";
import PageLoading from "../../Components/PageInfo/PageLoading";
import { RootState } from "../../store/root-reducer";
import { useActions } from "../../utils/hooks/useActions";

const ArticlesPage = () => {
  const params = useParams();
  const { axiosData } = useActions();

  useEffect(() => {
    params.id && axiosData(getArticle(params.id));
  }, [params]);

  const { data, err, loading } = useSelector(
    (state: RootState) => state.Articles
  );
  data.length && console.log(data);

  return (
    <Box>
      {err ? (
        <PageError content={err} />
      ) : loading || !data.length ? (
        <PageLoading />
      ) : (
        <ArticlesItem article={data[0]} />
      )}
    </Box>
  );
};

export default ArticlesPage;
