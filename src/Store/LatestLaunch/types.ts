import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";

export interface LatestLaunchState {
  latestLaunch: IQueryResult<ILaunch>;
  loading: boolean;
}

export const FETCH_LATEST_LAUNCH_START = "FETCH_LATEST_LAUNCH_START";
export const FETCH_LATEST_LAUNCH_SUCCESS = "FETCH_LATEST_LAUNCH_SUCCESS";
export const FETCH_LATEST_LAUNCH_FAIL = "FETCH_LATEST_LAUNCH_FAIL";

interface FetchLatestLaunchStartAction {
  type: typeof FETCH_LATEST_LAUNCH_START;
}

interface FetchLatestLaunchSuccessAction {
  type: typeof FETCH_LATEST_LAUNCH_SUCCESS;
  payload: IQueryResult<ILaunch>;
}

interface FetchLatestLaunchFailAction {
  type: typeof FETCH_LATEST_LAUNCH_FAIL;
  payload: string;
}

export type LatestLaunchTypes =
  | FetchLatestLaunchStartAction
  | FetchLatestLaunchSuccessAction
  | FetchLatestLaunchFailAction;
