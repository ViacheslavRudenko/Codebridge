import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

const devTools =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
