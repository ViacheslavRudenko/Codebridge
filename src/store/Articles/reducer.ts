import { ArticlesAction, ArticlesActionTypes, ArticlesState } from "../../types/store";

export const initialState: ArticlesState = {
  loading: false,
  err: "",
  data: [],
};

const reducerJobs = (state = initialState, action: ArticlesAction): ArticlesState => {
  switch (action.type) {
    case ArticlesActionTypes.FETCH_ARTICLES: {
      return { loading: true, err: "", data: [] };
    }
    case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS: {
      return { loading: false, err: "", data: action.payload };
    }
    case ArticlesActionTypes.FETCH_ARTICLES_ERROR: {
      return { loading: false, err: action.payload, data: [] };
    }
    case ArticlesActionTypes.UPDATE_ARTICLES: {
      return { loading: false, err: '', data: action.payload };
    }

    default:
      return state;
  }
};
export default reducerJobs;