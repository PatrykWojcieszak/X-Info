import produce from "immer";
import {
  RocketState,
  FETCH_ROCKET_START,
  FETCH_ROCKET_SUCCESS,
  FETCH_ROCKET_FAIL,
  RocketTypes,
} from "./types";

const initialState: RocketState = {
  rocket: {
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

export const rocketReducer = produce(
  (draft: RocketState, action: RocketTypes): RocketState => {
    switch (action.type) {
      case FETCH_ROCKET_START: {
        draft.loading = true;
        return draft;
      }

      case FETCH_ROCKET_SUCCESS: {
        draft.rocket = action.payload;
        draft.loading = false;
        return draft;
      }

      case FETCH_ROCKET_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
