import axios from "axios";
import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";
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
  newNextLaunch: IQueryResult<ILaunch>
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

export const fetchNextLaunch = () => {
  return (dispatch) => {
    dispatch(fetchNextLaunchStart());

    axios
      .post<IQueryResult<ILaunch>>(
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
};
