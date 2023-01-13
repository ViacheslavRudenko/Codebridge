import { Alert, Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PageError from "../../Components/PageInfo/PageError";
import PageLoading from "../../Components/PageInfo/PageLoading";
import { RootState } from "../../store/root-reducer";
import { useActions } from "../../utils/hooks/useActions";

const ArticlesPage = () => {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData();
  }, []);

  const { data, err, loading } = useSelector(
    (state: RootState) => state.Articles
  );

  return (
    <Box>
      {err ? (
        <PageError content={err} />
      ) : loading ? (
        <PageLoading />
      ) : (
        <Box>Content</Box>
      )}
    </Box>
  );
};

export default ArticlesPage;
