import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import Home from "./modules/Home/Home";
import Launches from "./modules/Launches/Launches";
import Nav from "./modules/shared/Nav/Nav";
import Footer from "./modules/shared/Footer/Footer";
import About from "./modules/About/About";
import Vehicles from "./modules/Vehicles/Vehicles";
import Rocket from "./modules/Rocket/Rocket";

import "./App.scss";

const routes = (
  <Switch>
    <Route path="/home" exact render={() => <Home />} />
    <Route path="/launches" exact render={() => <Launches />} />
    <Route path="/vehicles" exact render={() => <Vehicles />} />
    <Route path="/vehicles/falcon-heavy" exact render={() => <Rocket />} />
    <Route path="/about" exact render={() => <About />} />
    <Redirect to="/home" />
  </Switch>
);

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      {location.pathname !== "/about" ? <Footer /> : null}
    </div>
  );
}

export default App;
