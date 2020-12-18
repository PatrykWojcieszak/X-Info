import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";

export interface LaunchState {
  launch: IQueryResult<ILaunch>;
  loading: boolean;
}

export const FETCH_LAUNCH_START = "FETCH_LAUNCH_START";
export const FETCH_LAUNCH_SUCCESS = "FETCH_LAUNCH_SUCCESS";
export const FETCH_LAUNCH_FAIL = "FETCH_LAUNCH_FAIL";

interface FetchLaunchStartAction {
  type: typeof FETCH_LAUNCH_START;
}

interface FetchLaunchSuccessAction {
  type: typeof FETCH_LAUNCH_SUCCESS;
  payload: IQueryResult<ILaunch>;
}

interface FetchLaunchFailAction {
  type: typeof FETCH_LAUNCH_FAIL;
  payload: string;
}

export type LaunchTypes =
  | FetchLaunchStartAction
  | FetchLaunchSuccessAction
  | FetchLaunchFailAction;
