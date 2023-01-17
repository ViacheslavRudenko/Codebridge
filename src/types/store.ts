import { Article, FilteredArticles } from "./article";

export interface ArticlesState {
  loading: boolean;
  err: string;
  data: Article[];
  filteredArticles: FilteredArticles[]
}

export enum ArticlesActionTypes {
  FETCH_ARTICLES = "FETCH_ARTICLES",
  FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS",
  FETCH_ARTICLES_ERROR = "FETCH_ARTICLES_ERROR",
  FILTERED_ARTICLES = 'FILTERED_ARTICLES'
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

interface FilteredArticlesAction {
  type: ArticlesActionTypes.FILTERED_ARTICLES;
  payload: FilteredArticles[];

}
export type ArticlesAction =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction
  | FilteredArticlesAction;

