import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Article } from "../../types/article";
import { ArticlesAction, ArticlesActionTypes } from "../../types/store";


export const axiosData = (getData: Promise<AxiosResponse>) => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES });
    await getData
      .then((resp: AxiosResponse) =>
        dispatch({
          type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
          payload: Array.isArray(resp.data) ? resp.data : [resp.data],
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


export const updateArticles = (articles: Article[]) => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    dispatch({
      type: ArticlesActionTypes.UPDATE_ARTICLES,
      payload: articles,
    })
  }
}