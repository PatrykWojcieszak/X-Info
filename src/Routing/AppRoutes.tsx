import React, { Suspense } from "react";
import { useLocation } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppRoute } from "./AppRoute.enum";

const Home = React.lazy(() => {
  return import("../Modules/Home/Home");
});

const Launches = React.lazy(() => {
  return import("../Modules/Launches/Launches");
});

const About = React.lazy(() => {
  return import("../Modules/About/About");
});

const Vehicles = React.lazy(() => {
  return import("../Modules/Vehicles/Vehicles");
});

const Rocket = React.lazy(() => {
  return import("../Modules/Rocket/Rocket");
});

const Launch = React.lazy(() => {
  return import("../Modules/Launch/Launch");
});

const Starlink = React.lazy(() => {
  return import("../Modules/Starlink/Starlink");
});

export const AppRoutes = () => {
  let location = useLocation();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch location={location} key={location.pathname}>
        <Route path={AppRoute.home} exact render={() => <Home />} />
        <Route path={AppRoute.launchesType} exact render={() => <Launches />} />
        <Route path={AppRoute.launch} exact render={() => <Launch />} />
        <Route path={AppRoute.vehicles} exact render={() => <Vehicles />} />
        <Route path={AppRoute.vehiclesId} exact render={() => <Rocket />} />
        <Route path={AppRoute.starlink} exact render={() => <Starlink />} />
        <Route path={AppRoute.about} exact render={() => <About />} />
        <Redirect to={AppRoute.home} />
      </Switch>
    </Suspense>
  );
};
