import { updateObject } from "../../Utility/Utility";
import {
  LatestLaunchState,
  FETCH_LATEST_LAUNCH_START,
  FETCH_LATEST_LAUNCH_SUCCESS,
  FETCH_LATEST_LAUNCH_FAIL,
  LatestLaunchTypes,
} from "./types";

const initialState: LatestLaunchState = {
  latestLaunch: {
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

export function latestLaunchReducer(
  state = initialState,
  action: LatestLaunchTypes
): LatestLaunchState {
  switch (action.type) {
    case FETCH_LATEST_LAUNCH_START:
      return updateObject(state, { loading: true });

    case FETCH_LATEST_LAUNCH_SUCCESS:
      return updateObject(state, {
        latestLaunch: action.payload,
        loading: false,
      });

    case FETCH_LATEST_LAUNCH_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
