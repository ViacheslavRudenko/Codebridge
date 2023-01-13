import { Article } from "./article";

export interface ArticlesState {
  loading: boolean;
  err: string;
  data: Article[];
}

export enum ArticlesActionTypes {
  FETCH_ARTICLES = "FETCH_ARTICLES",
  FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS",
  FETCH_ARTICLES_ERROR = "FETCH_ARTICLES_ERROR",
}

interface FetchArticlesAction {
  type: ArticlesActionTypes.FETCH_ARTICLES;
}
interface FetchArticlesSuccessAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS;
  payload: Article[];
}
interface FetchArticlesErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}
export type ArticlesAction =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction;


