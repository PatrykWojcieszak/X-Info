import produce from "immer";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

import {
  PastLaunchesState,
  FETCH_PAST_LAUNCHES_START,
  FETCH_PAST_LAUNCHES_SUCCESS,
  FETCH_PAST_LAUNCHES_FAIL,
  PastLaunchesTypes,
} from "./types";

const initialState: PastLaunchesState = {
  [DEFAULT_KEY]: null,
  pastLaunches: {
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

export const pastLaunchesReducer = produce(
  (draft: PastLaunchesState, action: PastLaunchesTypes): PastLaunchesState => {
    switch (action.type) {
      case FETCH_PAST_LAUNCHES_START: {
        draft.loading = true;
        return draft;
      }
      case FETCH_PAST_LAUNCHES_SUCCESS: {
        draft.loading = false;
        draft.pastLaunches = action.payload;
        draft[DEFAULT_KEY] = generateCacheTTL();
        return draft;
      }
      case FETCH_PAST_LAUNCHES_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
