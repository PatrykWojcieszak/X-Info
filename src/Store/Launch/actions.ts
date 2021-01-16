import axios from "axios";
import ILaunch from "../../Types/ILaunch";
import IQueryResult from "../../Types/IQueryResult";
import LaunchQuery from "../../Queries/LaunchQuery";
import {
  FETCH_LAUNCH_START,
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_FAIL,
  LaunchTypes,
} from "./types";

export function fetchLaunchStart(): LaunchTypes {
  return {
    type: FETCH_LAUNCH_START,
  };
}

export function fetchLaunchSuccess(
  newLaunch: IQueryResult<ILaunch>
): LaunchTypes {
  return {
    type: FETCH_LAUNCH_SUCCESS,
    payload: newLaunch,
  };
}

export function fetchLaunchFail(error: string): LaunchTypes {
  return {
    type: FETCH_LAUNCH_FAIL,
    payload: error,
  };
}

export const fetchLaunch = (flightNumber: number) => {
  return (dispatch) => {
    dispatch(fetchLaunchStart());
    const query = LaunchQuery;
    query.query.flight_number = flightNumber;

    axios
      .post<IQueryResult<ILaunch>>(
        "https://api.spacexdata.com/v4/launches/query",
        query
      )
      .then((res) => {
        console.log(res.data);
        dispatch(fetchLaunchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchLaunchFail(err));
      });
  };
};
