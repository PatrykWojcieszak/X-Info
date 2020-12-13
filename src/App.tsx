import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./modules/shared/Nav/Nav";
import Footer from "./modules/shared/Footer/Footer";

import "./App.scss";

const Home = React.lazy(() => {
  return import("./modules/Home/Home");
});

const Launches = React.lazy(() => {
  return import("./modules/Launches/Launches");
});

const About = React.lazy(() => {
  return import("./modules/About/About");
});

const Vehicles = React.lazy(() => {
  return import("./modules/Vehicles/Vehicles");
});

const Rocket = React.lazy(() => {
  return import("./modules/Rocket/Rocket");
});

const Launch = React.lazy(() => {
  return import("./modules/Launch/Launch");
});

function App() {
  let location = useLocation();

  const routes = (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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

  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      {location.pathname !== "/about" ? <Footer /> : null}
    </div>
  );
}

export default App;
