import { cacheEnhancer } from "redux-cache";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./index";

const middleware = [thunk];

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)
    : null || compose;

const configureStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      cacheEnhancer({ log: true })
    )
  );

export default configureStore;
