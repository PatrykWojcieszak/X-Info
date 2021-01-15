import { updateObject } from "../../Utility/Utility";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";
import {
  BoosterState,
  FETCH_BOOSTERS_START,
  FETCH_BOOSTERS_SUCCESS,
  FETCH_BOOSTERS_FAIL,
  BoosterTypes,
} from "./types";

const initialState: BoosterState = {
  boosters: {
    [DEFAULT_KEY]: null,
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

export function boostersReducer(
  state = initialState,
  action: BoosterTypes
): BoosterState {
  switch (action.type) {
    case FETCH_BOOSTERS_START:
      return updateObject(state, { loading: true });

    case FETCH_BOOSTERS_SUCCESS:
      return {
        ...state,
        [DEFAULT_KEY]: generateCacheTTL(),
        boosters: {
          ...state.boosters,
          ...action.payload,
          docs: [...state.boosters.docs, ...action.payload.docs],
        },
        loading: false,
      };

    case FETCH_BOOSTERS_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
