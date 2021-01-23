import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import Nav from "./Modules/Shared/Nav/Nav";
import Footer from "./Modules/Shared/Footer/Footer";
import { useMediaQuery } from "./Hooks/";

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
    <Switch location={location} key={location.pathname}>
      <Route
        path="/home"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        )}
      />
      <Route
        path="/launches/:launchType"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <Launches />
          </Suspense>
        )}
      />
      <Route
        path="/launch/:flight_number"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <Launch />
          </Suspense>
        )}
      />
      <Route
        path="/vehicles"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <Vehicles />
          </Suspense>
        )}
      />
      <Route
        path="/vehicles/:vehicle"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <Rocket />
          </Suspense>
        )}
      />
      <Route
        path="/starlink"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <Starlink />
          </Suspense>
        )}
      />
      <Route
        path="/about"
        exact
        render={() => (
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        )}
      />
      <Redirect to="/home" />
    </Switch>
  );

  return (
    <div className={styles.App}>
      {isMobile ? <SideBar /> : <Nav />}
      {routes}
      {location.pathname !== "/about" ? <Footer /> : null}
    </div>
  );
}

export default App;
