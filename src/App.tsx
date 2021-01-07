import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./Modules/Shared/Nav/Nav";
import Footer from "./Modules/Shared/Footer/Footer";
import { useMediaQuery } from "./Hooks/useMediaQuery";

import SideBar from "./Modules/Shared/Nav/SideBar/SideBar";

import styles from "./App.module.scss";

const Home = React.lazy(() => {
  return import("./Modules/Home/Home");
});

const Launches = React.lazy(() => {
  return import("./Modules/Launches/Launches");
});

const About = React.lazy(() => {
  return import("./Modules/About/About");
});

const Vehicles = React.lazy(() => {
  return import("./Modules/Vehicles/Vehicles");
});

const Rocket = React.lazy(() => {
  return import("./Modules/Rocket/Rocket");
});

const Launch = React.lazy(() => {
  return import("./Modules/Launch/Launch");
});

const Starlink = React.lazy(() => {
  return import("./Modules/Starlink/Starlink");
});

function App() {
  let location = useLocation();

  const isMobile = useMediaQuery("(max-width: 500px)");

  const routes = (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/launches/:launchType" exact render={() => <Launches />} />
        <Route path="/launch/:flight_number" exact render={() => <Launch />} />
        <Route path="/vehicles" exact render={() => <Vehicles />} />
        <Route path="/vehicles/:vehicle" exact render={() => <Rocket />} />
        <Route path="/starlink" exact render={() => <Starlink />} />
        <Route path="/about" exact render={() => <About />} />
        <Redirect to="/home" />
      </Switch>
    </AnimatePresence>
  );

  return (
    <div className={styles.App}>
      {isMobile ? <SideBar /> : <Nav />}
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      {location.pathname !== "/about" ? <Footer /> : null}
    </div>
  );
}

export default App;
