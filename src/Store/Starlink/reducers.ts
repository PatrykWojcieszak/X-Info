import produce from "immer";
import {
  StarlinkState,
  FETCH_STARLINK_START,
  FETCH_STARLINK_SUCCESS,
  FETCH_STARLINK_FAIL,
  StarlinkTypes,
} from "./types";

const initialState: StarlinkState = {
  starlinks: {
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

export const starlinkReducer = produce(
  (draft: StarlinkState, action: StarlinkTypes): StarlinkState => {
    switch (action.type) {
      case FETCH_STARLINK_START: {
        draft.loading = true;
        return draft;
      }
      case FETCH_STARLINK_SUCCESS: {
        draft.loading = false;
        draft.starlinks = action.payload;
        return draft;
      }
      case FETCH_STARLINK_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
