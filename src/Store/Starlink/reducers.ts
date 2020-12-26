import { updateObject } from "../../Utility/Utility";
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

export function starlinkReducer(
  state = initialState,
  action: StarlinkTypes
): StarlinkState {
  switch (action.type) {
    case FETCH_STARLINK_START:
      return updateObject(state, { loading: true });

    case FETCH_STARLINK_SUCCESS:
      return updateObject(state, {
        starlinks: action.payload,
        loading: false,
      });

    case FETCH_STARLINK_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
