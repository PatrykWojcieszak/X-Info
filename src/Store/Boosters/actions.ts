import axios from "axios";
import { checkCacheValid } from "redux-cache";
import IBooster from "../../Models/IBooster";
import IQueryResult from "../../Models/IQueryResult";
import BoostersQuery from "../../Queries/BoostersQuery";
import {
  FETCH_BOOSTERS_START,
  FETCH_BOOSTERS_SUCCESS,
  FETCH_BOOSTERS_FAIL,
  BoosterTypes,
} from "./types";

export function fetchBoostersStart(): BoosterTypes {
  return {
    type: FETCH_BOOSTERS_START,
  };
}

export function fetchBoostersSuccess(
  boosters: IQueryResult<IBooster>
): BoosterTypes {
  return {
    type: FETCH_BOOSTERS_SUCCESS,
    payload: boosters,
  };
}

export function fetchBoostersFail(error: string): BoosterTypes {
  return {
    type: FETCH_BOOSTERS_FAIL,
    payload: error,
  };
}

export const fetchBoosters = (page: number) => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "boosters");
  if (isCacheValid && page === 1) {
    return null;
  }
  dispatch(fetchBoostersStart());

  const query = BoostersQuery;
  query.options.page = page;

  axios
    .post<IQueryResult<IBooster>>(
      "https://api.spacexdata.com/v4/cores/query",
      query
    )
    .then((res) => {
      dispatch(fetchBoostersSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchBoostersFail(err));
    });
};
