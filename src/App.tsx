import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Nav, Footer, SideBar } from "./Modules/Shared";
import { useMediaQuery } from "./Hooks/";

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
    <Switch location={location} key={location.pathname}>
      <Route path="/home" exact render={() => <Home />} />
      <Route path="/launches/:launchType" exact render={() => <Launches />} />
      <Route path="/launch/:id" exact render={() => <Launch />} />
      <Route path="/vehicles" exact render={() => <Vehicles />} />
      <Route path="/vehicles/:id" exact render={() => <Rocket />} />
      <Route path="/starlink" exact render={() => <Starlink />} />
      <Route path="/about" exact render={() => <About />} />
      <Redirect to="/home" />
    </Switch>
  );

  return (
    <div className={styles.App}>
      <Suspense fallback={<p>Loading...</p>}>
        {isMobile ? <SideBar /> : <Nav />}
        {routes}
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
