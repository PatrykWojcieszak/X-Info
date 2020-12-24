import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Store/index";
import { cacheEnhancer } from "redux-cache";
import configureStore from "./Store/configureStore";
import "./fontawesome/fontawesome";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose)
//     : null || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk), cacheEnhancer)
// );

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
