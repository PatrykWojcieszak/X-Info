import axios from "axios";
import { checkCacheValid } from "redux-cache";
import { Launch, QueryResult } from "../../Types";
import UpcomingLaunchesQuery from "../../Queries/UpcomingLaunchesQuery";
import {
  FETCH_UPCOMING_LAUNCHES_START,
  FETCH_UPCOMING_LAUNCHES_SUCCESS,
  FETCH_UPCOMING_LAUNCHES_FAIL,
  UpcomingLaunchesTypes,
} from "./types";

export function fetchUpcomingLaunchesStart(): UpcomingLaunchesTypes {
  return {
    type: FETCH_UPCOMING_LAUNCHES_START,
  };
}

export function fetchUpcomingLaunchesSuccess(
  newUpcomingLaunches: QueryResult<Launch>
): UpcomingLaunchesTypes {
  return {
    type: FETCH_UPCOMING_LAUNCHES_SUCCESS,
    payload: newUpcomingLaunches,
  };
}

export function fetchUpcomingLaunchesFail(
  error: string
): UpcomingLaunchesTypes {
  return {
    type: FETCH_UPCOMING_LAUNCHES_FAIL,
    payload: error,
  };
}

export const fetchUpcomingLaunches = () => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "upcomingLaunches");
  if (isCacheValid) {
    return null;
  }

  dispatch(fetchUpcomingLaunchesStart());

  axios
    .post<QueryResult<Launch>>(
      "https://api.spacexdata.com/v4/launches/query",
      UpcomingLaunchesQuery
    )
    .then((res) => {
      dispatch(fetchUpcomingLaunchesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchUpcomingLaunchesFail(err));
    });
};
