import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData, LAUNCHES_QUERY } from "../../API/spacexAPI";
import { QueryResult, Launch } from "../../Types";
import { AppThunk } from "../configureStore";
import { RecentLaunchesQuery } from "./../../Queries";

export interface RecentLaunchesState {
  recentLaunches: QueryResult<Launch>;
  loading: boolean;
}

const initialState: RecentLaunchesState = {
  recentLaunches: {
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

const recentLaunches = createSlice({
  name: "recentLaunches",
  initialState,
  reducers: {
    getRecentLaunchesStart(state) {
      state.loading = true;
    },
    getRecentLaunchesSuccess(
      state,
      action: PayloadAction<QueryResult<Launch>>
    ) {
      state.recentLaunches = action.payload;
      state.loading = false;
    },
    getRecentLaunchesFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getRecentLaunchesStart,
  getRecentLaunchesSuccess,
  getRecentLaunchesFail,
} = recentLaunches.actions;

export default recentLaunches.reducer;

export const fetchRecentLaunches = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getRecentLaunchesStart());
    const launches = await getData<Launch>(LAUNCHES_QUERY, RecentLaunchesQuery);
    dispatch(getRecentLaunchesSuccess(launches));
  } catch (err) {
    dispatch(getRecentLaunchesFail());
  }
};
