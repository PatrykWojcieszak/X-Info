import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/configureStore";
import "./fontawesome/fontawesome";
import { useScrollToTop as ScrollToTOp } from "./Hooks/index";
import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ScrollToTOp />
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
