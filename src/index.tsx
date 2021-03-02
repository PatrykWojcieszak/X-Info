import "./i18n";
import "./index.scss";
import "./fontawesome/fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/configureStore";
import { useScrollToTop as ScrollToTOp } from "./Hooks/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./resources/styles/global";
import { mainTheme } from "./resources/styles/themeColors";
import { Typography } from "./resources/styles/themeFonts";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ThemeProvider theme={{ fonts: Typography, colors: mainTheme }}>
          <GlobalStyle />
          <ScrollToTOp />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
