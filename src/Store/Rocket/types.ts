import IQueryResult from "../../Models/IQueryResult";
import IRocket from "../../Models/IRocket";

export interface RocketState {
  rocket: IQueryResult<IRocket>;
  loading: boolean;
}

export const FETCH_ROCKET_START = "FETCH_ROCKET_START";
export const FETCH_ROCKET_SUCCESS = "FETCH_ROCKET_SUCCESS";
export const FETCH_ROCKET_FAIL = "FETCH_ROCKET_FAIL";

interface FetchRocketStartAction {
  type: typeof FETCH_ROCKET_START;
}

interface FetchRocketSuccessAction {
  type: typeof FETCH_ROCKET_SUCCESS;
  payload: IQueryResult<IRocket>;
}

interface FetchRocketFailAction {
  type: typeof FETCH_ROCKET_FAIL;
  payload: string;
}

export type RocketTypes =
  | FetchRocketStartAction
  | FetchRocketSuccessAction
  | FetchRocketFailAction;
