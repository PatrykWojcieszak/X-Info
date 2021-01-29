import produce from "immer";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";
import {
  BoosterState,
  FETCH_BOOSTERS_START,
  FETCH_BOOSTERS_SUCCESS,
  FETCH_BOOSTERS_FAIL,
  BoosterTypes,
} from "./types";

const initialState: BoosterState = {
  [DEFAULT_KEY]: null,
  boosters: {
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

export const boostersReducer = produce(
  (draft: BoosterState, action: BoosterTypes): BoosterState => {
    switch (action.type) {
      case FETCH_BOOSTERS_START: {
        draft.loading = true;
        return draft;
      }
      case FETCH_BOOSTERS_SUCCESS: {
        const boosterTemp = draft.boosters.docs;
        draft.boosters = action.payload;
        draft.boosters.docs.unshift(...boosterTemp);
        draft.loading = false;
        draft[DEFAULT_KEY] = generateCacheTTL();
        return draft;
      }
      case FETCH_BOOSTERS_FAIL: {
        draft.loading = false;
        return draft;
      }
    }
  },
  initialState
);
