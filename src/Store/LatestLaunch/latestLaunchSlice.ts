import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData, LAUNCHES_QUERY } from "../../API/spacexAPI";
import { QueryResult, Launch } from "../../Types";
import { AppThunk } from "../configureStore";
import { LatestLaunchQuery } from "./../../Queries/LatestLaunchQuery";

export interface LatestLaunchState {
  latestLaunch: QueryResult<Launch>;
  loading: boolean;
}

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

const latestLaunch = createSlice({
  name: "latestLaunch",
  initialState,
  reducers: {
    getLatestLaunchStart(state) {
      state.loading = true;
    },
    getLatestLaunchSuccess(state, action: PayloadAction<QueryResult<Launch>>) {
      state.latestLaunch = action.payload;
      state.loading = false;
    },
    getNextLaunchFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getLatestLaunchStart,
  getLatestLaunchSuccess,
  getNextLaunchFail,
} = latestLaunch.actions;

export default latestLaunch.reducer;

export const fetchLatestLaunch = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getLatestLaunchStart());
    const launches = await getData<Launch>(LAUNCHES_QUERY, LatestLaunchQuery);
    dispatch(getLatestLaunchSuccess(launches));
  } catch (err) {
    dispatch(getNextLaunchFail());
  }
};
