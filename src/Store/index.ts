import { combineReducers } from "redux";

import { nextLaunchReducer } from "./NextLaunch/reducers";
import { recentLaunchesReducer } from "./RecentLaunches/reducers";
import { upcomingLaunchesReducer } from "./UpcomingLaunches/reducers";
import { pastLaunchesReducer } from "./PastLaunches/reducers";
import { rocketReducer } from "./Rocket/reducers";
import { launchReducer } from "./Launch/reducers";
import { latestLaunchReducer } from "./LatestLaunch/reducers";

export const rootReducer = combineReducers({
  nextLaunch: nextLaunchReducer,
  recentLaunches: recentLaunchesReducer,
  upcomingLaunches: upcomingLaunchesReducer,
  pastLaunches: pastLaunchesReducer,
  rocket: rocketReducer,
  launch: launchReducer,
  latestLaunch: latestLaunchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
