import produce from "immer";
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

export const recentLaunchesReducer = produce(
  (
    draft: RecentLaunchesState,
    action: RecentLaunchesTypes
  ): RecentLaunchesState => {
    switch (action.type) {
      case FETCH_RECENT_LAUNCHES_START: {
        draft.loading = true;
        return draft;
      }
      case FETCH_RECENT_LAUNCHES_SUCCESS: {
        draft.loading = false;
        draft.recentLaunches = action.payload;
        draft[DEFAULT_KEY] = generateCacheTTL();
        return draft;
      }
      case FETCH_RECENT_LAUNCHES_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
