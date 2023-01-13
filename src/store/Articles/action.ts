import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { getArticles } from "../../api/articles";
import { ArticlesAction, ArticlesActionTypes } from "../../types/store";


export const axiosData = () => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES });
    await getArticles()
      .then((resp: AxiosResponse) =>
        dispatch({
          type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
          payload: resp.data,
        })
      )
      .catch((err: AxiosError) =>
        dispatch({
          type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
          payload: err.message,
        })
      );
  };
};
