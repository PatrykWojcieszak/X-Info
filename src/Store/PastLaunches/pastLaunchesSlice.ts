import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData, LAUNCHES_QUERY } from "../../API/spacexAPI";
import { QueryResult, Launch } from "../../Types";
import { AppThunk } from "../configureStore";
import { PastLaunchesQuery } from "./../../Queries/PastLaunchesQuery";

export interface PastLaunchesState {
  pastLaunches: QueryResult<Launch>;
  loading: boolean;
}

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

const pastLaunches = createSlice({
  name: "pastLaunches",
  initialState,
  reducers: {
    getPastLaunchesStart(state) {
      state.loading = true;
    },
    getPastLaunchesSuccess(state, action: PayloadAction<QueryResult<Launch>>) {
      state.pastLaunches = action.payload;
      state.loading = false;
    },
    getPastLaunchesFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getPastLaunchesStart,
  getPastLaunchesSuccess,
  getPastLaunchesFail,
} = pastLaunches.actions;

export default pastLaunches.reducer;

export const fetchPastLaunches = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPastLaunchesStart());
    const launches = await getData<Launch>(LAUNCHES_QUERY, PastLaunchesQuery);
    dispatch(getPastLaunchesSuccess(launches));
  } catch (err) {
    dispatch(getPastLaunchesFail());
  }
};
