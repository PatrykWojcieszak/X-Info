import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./modules/Home/Home";
import Launches from "./modules/Launches/Launches";
import Nav from "./modules/shared/Nav/Nav";
import Footer from "./modules/shared/Footer/Footer";
import About from "./modules/About/About";
import Vehicles from "./modules/Vehicles/Vehicles";
import Rocket from "./modules/Rocket/Rocket";
import Launch from "./modules/Launch/Launch";

import "./App.scss";

const routes = (
  <AnimatePresence>
    <Switch>
      <Route path="/home" exact render={() => <Home />} />
      <Route path="/launches/:launchType" exact render={() => <Launches />} />
      <Route path="/launch/:flight_number" exact render={() => <Launch />} />
      <Route path="/vehicles" exact render={() => <Vehicles />} />
      <Route path="/vehicles/:vehicle" exact render={() => <Rocket />} />
      <Route path="/about" exact render={() => <About />} />
      <Redirect to="/home" />
    </Switch>
  </AnimatePresence>
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
