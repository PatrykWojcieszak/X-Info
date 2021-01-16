import { Launch, QueryResult } from "../../Types";

export interface NextLaunchState {
  nextLaunch: QueryResult<Launch>;
  loading: boolean;
}

export const FETCH_NEXT_LAUNCH_START = "FETCH_NEXT_LAUNCH_START";
export const FETCH_NEXT_LAUNCH_SUCCESS = "FETCH_NEXT_LAUNCH_SUCCESS";
export const FETCH_NEXT_LAUNCH_FAIL = "FETCH_NEXT_LAUNCH_FAIL";

interface FetchNextLaunchStartAction {
  type: typeof FETCH_NEXT_LAUNCH_START;
}

interface FetchNextLaunchSuccessAction {
  type: typeof FETCH_NEXT_LAUNCH_SUCCESS;
  payload: QueryResult<Launch>;
}

interface FetchNextLaunchFailAction {
  type: typeof FETCH_NEXT_LAUNCH_FAIL;
  payload: string;
}

export type NextLaunchTypes =
  | FetchNextLaunchStartAction
  | FetchNextLaunchSuccessAction
  | FetchNextLaunchFailAction;
