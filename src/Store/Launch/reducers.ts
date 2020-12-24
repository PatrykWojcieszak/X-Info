import { updateObject } from "../../Utility/Utility";
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

export function launchReducer(
  state = initialState,
  action: LaunchTypes
): LaunchState {
  switch (action.type) {
    case FETCH_LAUNCH_START:
      return updateObject(state, { loading: true });

    case FETCH_LAUNCH_SUCCESS:
      return updateObject(state, {
        launch: action.payload,
        loading: false,
      });

    case FETCH_LAUNCH_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
