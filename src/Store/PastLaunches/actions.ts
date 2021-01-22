import axios from "axios";
import { checkCacheValid } from "redux-cache";
import { Launch, QueryResult } from "../../Types";

import { PastLaunchesQuery } from "../../Queries";

import {
  FETCH_PAST_LAUNCHES_START,
  FETCH_PAST_LAUNCHES_SUCCESS,
  FETCH_PAST_LAUNCHES_FAIL,
  PastLaunchesTypes,
} from "./types";

export function fetchPastLaunchesStart(): PastLaunchesTypes {
  return {
    type: FETCH_PAST_LAUNCHES_START,
  };
}

export function fetchPastLaunchesSuccess(
  newPastLaunches: QueryResult<Launch>
): PastLaunchesTypes {
  return {
    type: FETCH_PAST_LAUNCHES_SUCCESS,
    payload: newPastLaunches,
  };
}

export function fetchPastLaunchesFail(error: string): PastLaunchesTypes {
  return {
    type: FETCH_PAST_LAUNCHES_FAIL,
    payload: error,
  };
}

export const fetchPastLaunches = () => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "pastLaunches");
  if (isCacheValid) {
    return null;
  }

  dispatch(fetchPastLaunchesStart());

  axios
    .post<QueryResult<Launch>>(
      "https://api.spacexdata.com/v4/launches/query",
      PastLaunchesQuery
    )
    .then((res) => {
      dispatch(fetchPastLaunchesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchPastLaunchesFail(err));
    });
};
