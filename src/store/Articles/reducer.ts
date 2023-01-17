import { ArticlesAction, ArticlesActionTypes, ArticlesState } from "../../types/store";

export const initialState: ArticlesState = {
  loading: false,
  err: "",
  data: [],
  filteredArticles: []
};

const reducerJobs = (state = initialState, action: ArticlesAction): ArticlesState => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES: {
      return { ...state, loading: true };
    }
    case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS: {
      return { ...state, loading: false, err: "", data: action.payload };
    }
    case ArticlesActionTypes.FETCH_ARTICLES_ERROR: {
      return { ...state, loading: false, err: action.payload };
    }
    case ArticlesActionTypes.FILTERED_ARTICLES: {
      return { ...state, filteredArticles: action.payload };
    }

    default:
      return state;
  }
};
export default reducerJobs;