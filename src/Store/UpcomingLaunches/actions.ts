import axios from "axios";
import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";
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
  newUpcomingLaunches: IQueryResult<ILaunch>
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

export const fetchUpcomingLaunches = () => {
  return (dispatch) => {
    dispatch(fetchUpcomingLaunchesStart());

    axios
      .post<IQueryResult<ILaunch>>(
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
};
