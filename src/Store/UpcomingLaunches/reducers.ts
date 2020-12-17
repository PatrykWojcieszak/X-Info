import { updateObject } from "../../Utility/Utility";
import {
  UpcomingLaunchState,
  FETCH_UPCOMING_LAUNCHES_START,
  FETCH_UPCOMING_LAUNCHES_SUCCESS,
  FETCH_UPCOMING_LAUNCHES_FAIL,
  UpcomingLaunchesTypes,
} from "./types";

const initialState: UpcomingLaunchState = {
  upcomingLaunches: {
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

export function upcomingLaunchesReducer(
  state = initialState,
  action: UpcomingLaunchesTypes
): UpcomingLaunchState {
  switch (action.type) {
    case FETCH_UPCOMING_LAUNCHES_START:
      return updateObject(state, { loading: true });

    case FETCH_UPCOMING_LAUNCHES_SUCCESS:
      return updateObject(state, {
        upcomingLaunches: action.payload,
        loading: false,
      });

    case FETCH_UPCOMING_LAUNCHES_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
