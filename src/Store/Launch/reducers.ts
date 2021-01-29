import produce from "immer";
import {
  LaunchState,
  FETCH_LAUNCH_START,
  FETCH_LAUNCH_SUCCESS,
  FETCH_LAUNCH_FAIL,
  LaunchTypes,
} from "./types";

const initialState: LaunchState = {
  launch: {
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

export const launchReducer = produce(
  (draft: LaunchState, action: LaunchTypes): LaunchState => {
    switch (action.type) {
      case FETCH_LAUNCH_START: {
        draft.loading = true;
        return draft;
      }
      case FETCH_LAUNCH_SUCCESS: {
        draft.launch = action.payload;
        draft.loading = false;
        return draft;
      }
      case FETCH_LAUNCH_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
