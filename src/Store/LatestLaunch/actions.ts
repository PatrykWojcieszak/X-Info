import axios from "axios";
import { checkCacheValid } from "redux-cache";
import { Launch, QueryResult } from "../../Types";

import { LatestLaunchQuery } from "../../Queries";

import {
  FETCH_LATEST_LAUNCH_START,
  FETCH_LATEST_LAUNCH_SUCCESS,
  FETCH_LATEST_LAUNCH_FAIL,
  LatestLaunchTypes,
} from "./types";

export function fetchLatestLaunchStart(): LatestLaunchTypes {
  return {
    type: FETCH_LATEST_LAUNCH_START,
  };
}

export function fetchLatestLaunchSuccess(
  newLaunch: QueryResult<Launch>
): LatestLaunchTypes {
  return {
    type: FETCH_LATEST_LAUNCH_SUCCESS,
    payload: newLaunch,
  };
}

export function fetchLatestLaunchFail(error: string): LatestLaunchTypes {
  return {
    type: FETCH_LATEST_LAUNCH_FAIL,
    payload: error,
  };
}

export const fetchLatestLaunch = () => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "latestLaunch");
  if (isCacheValid) {
    return null;
  }
  dispatch(fetchLatestLaunchStart());

  axios
    .post<QueryResult<Launch>>(
      "https://api.spacexdata.com/v4/launches/query",
      LatestLaunchQuery
    )
    .then((res) => {
      dispatch(fetchLatestLaunchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchLatestLaunchFail(err));
    });
};
