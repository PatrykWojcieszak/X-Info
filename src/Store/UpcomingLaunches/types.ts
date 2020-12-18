import ILaunch from "../../Models/ILaunch";
import IQueryResult from "../../Models/IQueryResult";

export interface UpcomingLaunchState {
  upcomingLaunches: IQueryResult<ILaunch>;
  loading: boolean;
}

export const FETCH_UPCOMING_LAUNCHES_START = "FETCH_UPCOMING_LAUNCHES_START";
export const FETCH_UPCOMING_LAUNCHES_SUCCESS =
  "FETCH_UPCOMING_LAUNCHES_SUCCESS";
export const FETCH_UPCOMING_LAUNCHES_FAIL = "FETCH_UPCOMING_LAUNCHES_FAIL";

interface FetchUpcomingLaunchesStartAction {
  type: typeof FETCH_UPCOMING_LAUNCHES_START;
}

interface FetchUpcomingLaunchesSuccessAction {
  type: typeof FETCH_UPCOMING_LAUNCHES_SUCCESS;
  payload: IQueryResult<ILaunch>;
}

interface FetchUpcomingLaunchesFailAction {
  type: typeof FETCH_UPCOMING_LAUNCHES_FAIL;
  payload: string;
}

export type UpcomingLaunchesTypes =
  | FetchUpcomingLaunchesStartAction
  | FetchUpcomingLaunchesSuccessAction
  | FetchUpcomingLaunchesFailAction;
