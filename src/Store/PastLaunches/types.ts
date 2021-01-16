import ILaunch from "../../Types/ILaunch";
import IQueryResult from "../../Types/IQueryResult";

export interface PastLaunchesState {
  pastLaunches: IQueryResult<ILaunch>;
  loading: boolean;
}

export const FETCH_PAST_LAUNCHES_START = "FETCH_PAST_LAUNCHES_START";
export const FETCH_PAST_LAUNCHES_SUCCESS = "FETCH_PAST_LAUNCHES_SUCCESS";
export const FETCH_PAST_LAUNCHES_FAIL = "FETCH_PAST_LAUNCHES_FAIL";

interface FetchPastLaunchesStartAction {
  type: typeof FETCH_PAST_LAUNCHES_START;
}

interface FetchPastLaunchesSuccessAction {
  type: typeof FETCH_PAST_LAUNCHES_SUCCESS;
  payload: IQueryResult<ILaunch>;
}

interface FetchPastLaunchesFailAction {
  type: typeof FETCH_PAST_LAUNCHES_FAIL;
  payload: string;
}

export type PastLaunchesTypes =
  | FetchPastLaunchesStartAction
  | FetchPastLaunchesSuccessAction
  | FetchPastLaunchesFailAction;
