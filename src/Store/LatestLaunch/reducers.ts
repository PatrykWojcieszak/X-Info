import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";
import produce from "immer";
import {
  LatestLaunchState,
  FETCH_LATEST_LAUNCH_START,
  FETCH_LATEST_LAUNCH_SUCCESS,
  FETCH_LATEST_LAUNCH_FAIL,
  LatestLaunchTypes,
} from "./types";

const initialState: LatestLaunchState = {
  [DEFAULT_KEY]: null,
  latestLaunch: {
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

export const latestLaunchReducer = produce(
  (draft: LatestLaunchState, action: LatestLaunchTypes): LatestLaunchState => {
    switch (action.type) {
      case FETCH_LATEST_LAUNCH_START: {
        draft.loading = true;
        return draft;
      }
      case FETCH_LATEST_LAUNCH_SUCCESS: {
        draft.latestLaunch = action.payload;
        draft[DEFAULT_KEY] = generateCacheTTL();
        draft.loading = false;
        return draft;
      }
      case FETCH_LATEST_LAUNCH_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
