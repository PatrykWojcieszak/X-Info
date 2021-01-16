import { Launch, QueryResult } from "../../Types";
export interface LaunchState {
  launch: QueryResult<Launch>;
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
  payload: QueryResult<Launch>;
}

interface FetchLaunchFailAction {
  type: typeof FETCH_LAUNCH_FAIL;
  payload: string;
}

export type LaunchTypes =
  | FetchLaunchStartAction
  | FetchLaunchSuccessAction
  | FetchLaunchFailAction;
