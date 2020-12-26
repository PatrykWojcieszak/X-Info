import IQueryResult from "../../Models/IQueryResult";
import IStarlink from "../../Models/IStarlink";

export interface StarlinkState {
  starlinks: IQueryResult<IStarlink>;
  loading: boolean;
}

export const FETCH_STARLINK_START = "FETCH_STARLINK_START";
export const FETCH_STARLINK_SUCCESS = "FETCH_STARLINK_SUCCESS";
export const FETCH_STARLINK_FAIL = "FETCH_STARLINK_FAIL";

interface FetchStarlinkStartAction {
  type: typeof FETCH_STARLINK_START;
}

interface FetchStarlinkSuccessAction {
  type: typeof FETCH_STARLINK_SUCCESS;
  payload: IQueryResult<IStarlink>;
}

interface FetchStarlinkFailAction {
  type: typeof FETCH_STARLINK_FAIL;
  payload: string;
}

export type StarlinkTypes =
  | FetchStarlinkStartAction
  | FetchStarlinkSuccessAction
  | FetchStarlinkFailAction;
