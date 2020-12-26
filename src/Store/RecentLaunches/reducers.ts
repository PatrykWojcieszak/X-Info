import { updateObject } from "../../Utility/Utility";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";
import {
  RecentLaunchesState,
  FETCH_RECENT_LAUNCHES_START,
  FETCH_RECENT_LAUNCHES_SUCCESS,
  FETCH_RECENT_LAUNCHES_FAIL,
  RecentLaunchesTypes,
} from "./types";

const initialState: RecentLaunchesState = {
  [DEFAULT_KEY]: null,
  recentLaunches: {
    docs: [],
    totalDocs: 0,
    offset: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: 0,
    nextPage: 0,
  },
  loading: true,
};

export function recentLaunchesReducer(
  state = initialState,
  action: RecentLaunchesTypes
): RecentLaunchesState {
  switch (action.type) {
    case FETCH_RECENT_LAUNCHES_START:
      return updateObject(state, { loading: true });

    case FETCH_RECENT_LAUNCHES_SUCCESS:
      return updateObject(state, {
        recentLaunches: action.payload,
        loading: false,
        [DEFAULT_KEY]: generateCacheTTL(),
      });

    case FETCH_RECENT_LAUNCHES_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
