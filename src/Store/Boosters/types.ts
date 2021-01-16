import IBooster from "../../Types/IBooster";
import IQueryResult from "../../Types/IQueryResult";

export interface BoosterState {
  boosters: IQueryResult<IBooster>;
  loading: boolean;
}

export const FETCH_BOOSTERS_START = "FETCH_BOOSTERS_START";
export const FETCH_BOOSTERS_SUCCESS = "FETCH_BOOSTERS_SUCCESS";
export const FETCH_BOOSTERS_FAIL = "FETCH_BOOSTERS_FAIL";

interface FetchBoosterStartAction {
  type: typeof FETCH_BOOSTERS_START;
}

interface FetchBoosterSuccessAction {
  type: typeof FETCH_BOOSTERS_SUCCESS;
  payload: IQueryResult<IBooster>;
}

interface FetchBoosterFailAction {
  type: typeof FETCH_BOOSTERS_FAIL;
  payload: string;
}

export type BoosterTypes =
  | FetchBoosterStartAction
  | FetchBoosterSuccessAction
  | FetchBoosterFailAction;
