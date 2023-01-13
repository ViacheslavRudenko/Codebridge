import { combineReducers } from "redux";
import reducerArticles from "./Articles/reducer";


export const rootReducer = combineReducers({
  Articles: reducerArticles,

});
export type RootState = ReturnType<typeof rootReducer>;
