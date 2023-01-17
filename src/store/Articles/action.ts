import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Article, FilteredArticles } from "../../types/article";
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


export const filteredArticles = (articles: FilteredArticles[]) => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    dispatch({
      type: ArticlesActionTypes.FILTERED_ARTICLES,
      payload: articles,
    })
  }
}