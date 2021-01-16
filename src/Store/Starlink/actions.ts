import axios from "axios";
import { Starlink, QueryResult } from "../../Types";
import StarlinkQuery from "../../Queries/StarlinkQuery";
import {
  FETCH_STARLINK_START,
  FETCH_STARLINK_SUCCESS,
  FETCH_STARLINK_FAIL,
  StarlinkTypes,
} from "./types";

export function fetchStarlinkStart(): StarlinkTypes {
  return {
    type: FETCH_STARLINK_START,
  };
}

export function fetchStarlinkSuccess(
  newStarlink: QueryResult<Starlink>
): StarlinkTypes {
  return {
    type: FETCH_STARLINK_SUCCESS,
    payload: newStarlink,
  };
}

export function fetchStarlinkFail(error: string): StarlinkTypes {
  return {
    type: FETCH_STARLINK_FAIL,
    payload: error,
  };
}

export const fetchStarlink = () => {
  return (dispatch) => {
    dispatch(fetchStarlinkStart());

    axios
      .post<QueryResult<Starlink>>(
        "https://api.spacexdata.com/v4/starlink/query",
        StarlinkQuery
      )
      .then((res) => {
        dispatch(fetchStarlinkSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchStarlinkFail(err));
      });
  };
};
