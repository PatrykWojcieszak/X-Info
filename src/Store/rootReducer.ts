import { combineReducers } from "@reduxjs/toolkit";

import { nextLaunchReducer } from "./NextLaunch/reducers";
import { recentLaunchesReducer } from "./RecentLaunches/reducers";
import { pastLaunchesReducer } from "./PastLaunches/reducers";
import { launchReducer } from "./Launch/reducers";
import { latestLaunchReducer } from "./LatestLaunch/reducers";
import { boostersReducer } from "./Boosters/reducers";
import upcomingLaunchesReducer from "./UpcomingLaunches/upcomingLaunchesSlice";
import starlinkReducer from "./Starlink/starlinkSlice";
import rocketReducer from "./Rocket/rocketSlice";

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
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
