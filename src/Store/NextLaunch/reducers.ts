import { updateObject } from "../../Utility/Utility";
import {
  NextLaunchState,
  FETCH_NEXT_LAUNCH_START,
  FETCH_NEXT_LAUNCH_SUCCESS,
  FETCH_NEXT_LAUNCH_FAIL,
  NextLaunchTypes,
} from "./types";

const initialState: NextLaunchState = {
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

export function nextLaunchReducer(
  state = initialState,
  action: NextLaunchTypes
): NextLaunchState {
  switch (action.type) {
    case FETCH_NEXT_LAUNCH_START:
      return updateObject(state, { loading: true });

    case FETCH_NEXT_LAUNCH_SUCCESS:
      return updateObject(state, {
        nextLaunch: action.payload,
        loading: false,
      });

    case FETCH_NEXT_LAUNCH_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
