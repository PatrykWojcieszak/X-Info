import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";
import { updateObject } from "../../Utility/Utility";
import {
  PastLaunchesState,
  FETCH_PAST_LAUNCHES_START,
  FETCH_PAST_LAUNCHES_SUCCESS,
  FETCH_PAST_LAUNCHES_FAIL,
  PastLaunchesTypes,
} from "./types";

const initialState: PastLaunchesState = {
  pastLaunches: {
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

export function pastLaunchesReducer(
  state = initialState,
  action: PastLaunchesTypes
): PastLaunchesState {
  switch (action.type) {
    case FETCH_PAST_LAUNCHES_START:
      return updateObject(state, { loading: true });

    case FETCH_PAST_LAUNCHES_SUCCESS: {
      const oldLaunches = state.pastLaunches.docs;
      action.payload.docs = [...oldLaunches, ...action.payload.docs];

      return updateObject(state, {
        pastLaunches: action.payload,
        loading: false,
      });
    }

    case FETCH_PAST_LAUNCHES_FAIL:
      return updateObject(state, { loading: false });

    default:
      return state;
  }
}
