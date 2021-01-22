import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
import "./fontawesome/fontawesome";
import ScrollToTop from "./Utility/ScrollToTop";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
