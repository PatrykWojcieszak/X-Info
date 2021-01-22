import { Launch, QueryResult } from "../../Types";
export interface RecentLaunchesState {
  recentLaunches: QueryResult<Launch>;
  loading: boolean;
}

export const FETCH_RECENT_LAUNCHES_START = "FETCH_RECENT_LAUNCHES_START";
export const FETCH_RECENT_LAUNCHES_SUCCESS = "FETCH_RECENT_LAUNCHES_SUCCESS";
export const FETCH_RECENT_LAUNCHES_FAIL = "FETCH_RECENT_LAUNCHES_FAIL";

interface FetchRecentLaunchesStartAction {
  type: typeof FETCH_RECENT_LAUNCHES_START;
}

interface FetchRecentLaunchesSuccessAction {
  type: typeof FETCH_RECENT_LAUNCHES_SUCCESS;
  payload: QueryResult<Launch>;
}

interface FetchRecentLaunchesFailAction {
  type: typeof FETCH_RECENT_LAUNCHES_FAIL;
  payload: string;
}

export type RecentLaunchesTypes =
  | FetchRecentLaunchesStartAction
  | FetchRecentLaunchesSuccessAction
  | FetchRecentLaunchesFailAction;
