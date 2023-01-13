import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ArticlesAction, ArticlesActionTypes } from "../../types/store";


export const axiosData = (getData: Promise<AxiosResponse>) => {
  return async (dispatch: Dispatch<ArticlesAction>) => {
    dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES });
    await getData
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
