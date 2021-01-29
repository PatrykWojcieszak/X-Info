import produce from "immer";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";
import {
  NextLaunchState,
  FETCH_NEXT_LAUNCH_START,
  FETCH_NEXT_LAUNCH_SUCCESS,
  FETCH_NEXT_LAUNCH_FAIL,
  NextLaunchTypes,
} from "./types";

const initialState: NextLaunchState = {
  [DEFAULT_KEY]: null,
  nextLaunch: {
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

export const nextLaunchReducer = produce(
  (draft: NextLaunchState, action: NextLaunchTypes): NextLaunchState => {
    switch (action.type) {
      case FETCH_NEXT_LAUNCH_START: {
        draft.loading = true;
        return draft;
      }

      case FETCH_NEXT_LAUNCH_SUCCESS: {
        draft.nextLaunch = action.payload;
        draft.loading = false;
        draft[DEFAULT_KEY] = generateCacheTTL();
        return draft;
      }

      case FETCH_NEXT_LAUNCH_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
