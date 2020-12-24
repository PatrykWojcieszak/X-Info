import { updateObject } from "../../Utility/Utility";
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

export function rocketReducer(
  state = initialState,
  action: RocketTypes
): RocketState {
  switch (action.type) {
    case FETCH_ROCKET_START:
      return updateObject(state, { loading: true });

    case FETCH_ROCKET_SUCCESS:
      return updateObject(state, {
        rocket: action.payload,
        loading: false,
      });

    case FETCH_ROCKET_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
