import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./modules/Home/Home";
import Launches from "./modules/Launches/Launches";
import Nav from "./modules/shared/Nav/Nav";
import Footer from "./modules/shared/Footer/Footer";

import "./App.scss";

const routes = (
  <Switch>
    <Route path="/home" exact render={() => <Home />} />
    <Route path="/launches" exact render={() => <Launches />} />
    <Redirect to="/home" />
  </Switch>
);

function App() {
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      <Footer />
    </div>
  );
}

export default App;
