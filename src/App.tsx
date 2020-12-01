import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Home from "./modules/Home/Home";
import Launches from "./modules/Launches/Launches";
import Nav from "./modules/shared/Nav/Nav";

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
    </div>
  );
}

export default App;
