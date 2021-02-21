import { combineReducers } from "@reduxjs/toolkit";

import boostersReducer from "./Boosters/boostersSlice";
import launchReducer from "./Launch/launchSlice";
import latestLaunchReducer from "./LatestLaunch/latestLaunchSlice";
import nextLaunchReducer from "./NextLaunch/nextLaunchSlice";
import pastLaunchesReducer from "./PastLaunches/pastLaunchesSlice";
import upcomingLaunchesReducer from "./UpcomingLaunches/upcomingLaunchesSlice";
import starlinkReducer from "./Starlink/starlinkSlice";
import rocketReducer from "./Rocket/rocketSlice";
import recentLaunchesReducer from "./RecentLaunches/recentLaunchesSlice";
import launchesFilterReducer from "./LaunchesFilter/LaunchesFilterSlice";

const rootReducer = combineReducers({
  nextLaunch: nextLaunchReducer,
  recentLaunches: recentLaunchesReducer,
  upcomingLaunches: upcomingLaunchesReducer,
  pastLaunches: pastLaunchesReducer,
  rocket: rocketReducer,
  launch: launchReducer,
  latestLaunch: latestLaunchReducer,
  starlink: starlinkReducer,
  boosters: boostersReducer,
  launchesFilter: launchesFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
