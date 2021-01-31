import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData, LAUNCHES_QUERY } from "../../API/spacexAPI";
import { QueryResult, Launch } from "../../Types";
import { AppThunk } from "../configureStore";
import { NextLaunchQuery } from "./../../Queries/NextLaunchQuery";

export interface NextLaunchState {
  nextLaunch: QueryResult<Launch>;
  loading: boolean;
}

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

const nextLaunch = createSlice({
  name: "nextLaunch",
  initialState,
  reducers: {
    getNextLaunchStart(state) {
      state.loading = true;
    },
    getNextLaunchSuccess(state, action: PayloadAction<QueryResult<Launch>>) {
      state.nextLaunch = action.payload;
      state.loading = false;
    },
    getNextLaunchFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getNextLaunchStart,
  getNextLaunchSuccess,
  getNextLaunchFail,
} = nextLaunch.actions;

export default nextLaunch.reducer;

export const fetchNextLaunch = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getNextLaunchStart());
    const launches = await getData<Launch>(LAUNCHES_QUERY, NextLaunchQuery);
    dispatch(getNextLaunchSuccess(launches));
  } catch (err) {
    dispatch(getNextLaunchFail());
  }
};
