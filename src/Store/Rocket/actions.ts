import axios from "axios";
import IQueryResult from "../../Models/IQueryResult";
import IRocket from "../../Models/IRocket";
import RocketQuery from "../../Queries/RocketQuery";
import {
  FETCH_ROCKET_START,
  FETCH_ROCKET_SUCCESS,
  FETCH_ROCKET_FAIL,
  RocketTypes,
} from "./types";

export function fetchRocketStart(): RocketTypes {
  return {
    type: FETCH_ROCKET_START,
  };
}

export function fetchRocketSuccess(
  newRocket: IQueryResult<IRocket>
): RocketTypes {
  return {
    type: FETCH_ROCKET_SUCCESS,
    payload: newRocket,
  };
}

export function fetchRocketFail(error: string): RocketTypes {
  return {
    type: FETCH_ROCKET_FAIL,
    payload: error,
  };
}

export const fetchRocket = (rocketName: string) => {
  return (dispatch) => {
    dispatch(fetchRocketStart());
    const query = RocketQuery;
    query.query.name = rocketName;

    axios
      .post<IQueryResult<IRocket>>(
        "https://api.spacexdata.com/v4/rockets/query",
        query
      )
      .then((res) => {
        dispatch(fetchRocketSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchRocketFail(err));
      });
  };
};
