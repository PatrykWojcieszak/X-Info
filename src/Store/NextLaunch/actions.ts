import axios from "axios";
import { checkCacheValid } from "redux-cache";
import { Launch, QueryResult } from "../../Types";
import NextLaunchQuery from "../../Queries/NextLaunchQuery";
import {
  FETCH_NEXT_LAUNCH_START,
  FETCH_NEXT_LAUNCH_SUCCESS,
  FETCH_NEXT_LAUNCH_FAIL,
  NextLaunchTypes,
} from "./types";

export function fetchNextLaunchStart(): NextLaunchTypes {
  return {
    type: FETCH_NEXT_LAUNCH_START,
  };
}

export function fetchNextLaunchSuccess(
  newNextLaunch: QueryResult<Launch>
): NextLaunchTypes {
  return {
    type: FETCH_NEXT_LAUNCH_SUCCESS,
    payload: newNextLaunch,
  };
}

export function fetchNextLaunchFail(error: string): NextLaunchTypes {
  return {
    type: FETCH_NEXT_LAUNCH_FAIL,
    payload: error,
  };
}

export const fetchNextLaunch = () => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "nextLaunch");
  if (isCacheValid) {
    return null;
  }

  dispatch(fetchNextLaunchStart());

  axios
    .post<QueryResult<Launch>>(
      "https://api.spacexdata.com/v4/launches/query",
      NextLaunchQuery
    )
    .then((res) => {
      dispatch(fetchNextLaunchSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchNextLaunchFail(err));
    });
};
