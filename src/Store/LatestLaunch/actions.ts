import axios from "axios";
import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";
import LatestLaunchQuery from "../../Queries/LatestLaunchQuery";
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
  newLaunch: IQueryResult<ILaunch>
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

export const fetchLatestLaunch = () => {
  return (dispatch) => {
    dispatch(fetchLatestLaunchStart());

    axios
      .post<IQueryResult<ILaunch>>(
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
};
