import axios from "axios";
import { checkCacheValid } from "redux-cache";
import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";
import RecentLaunchesQuery from "../../Queries/RecentLaunchesQuery";
import {
  FETCH_RECENT_LAUNCHES_START,
  FETCH_RECENT_LAUNCHES_SUCCESS,
  FETCH_RECENT_LAUNCHES_FAIL,
  RecentLaunchesTypes,
} from "./types";

export function fetchRecentLaunchesStart(): RecentLaunchesTypes {
  return {
    type: FETCH_RECENT_LAUNCHES_START,
  };
}

export function fetchRecentLaunchesSuccess(
  newRecentLaunches: IQueryResult<ILaunch>
): RecentLaunchesTypes {
  return {
    type: FETCH_RECENT_LAUNCHES_SUCCESS,
    payload: newRecentLaunches,
  };
}

export function fetchRecentLaunchesFail(error: string): RecentLaunchesTypes {
  return {
    type: FETCH_RECENT_LAUNCHES_FAIL,
    payload: error,
  };
}

export const fetchRecentLaunches = () => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "recentLaunches");
  if (isCacheValid) {
    return null;
  }

  dispatch(fetchRecentLaunchesStart());

  axios
    .post<IQueryResult<ILaunch>>(
      "https://api.spacexdata.com/v4/launches/query",
      RecentLaunchesQuery
    )
    .then((res) => {
      dispatch(fetchRecentLaunchesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchRecentLaunchesFail(err));
    });
};
