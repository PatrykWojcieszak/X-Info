import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData, LAUNCHES_QUERY } from "../../API/spacexAPI";
import { QueryResult, Launch } from "../../Types";
import { AppThunk } from "../configureStore";
import { LaunchQuery } from "./../../Queries/LaunchQuery";

export interface LaunchState {
  launch: QueryResult<Launch>;
  loading: boolean;
}

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

const launch = createSlice({
  name: "launch",
  initialState,
  reducers: {
    getLaunchStart(state) {
      state.loading = true;
    },
    getLaunchSuccess(state, action: PayloadAction<QueryResult<Launch>>) {
      state.launch = action.payload;
      state.loading = false;
    },
    getLaunchFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getLaunchStart,
  getLaunchSuccess,
  getLaunchFail,
} = launch.actions;

export default launch.reducer;

export const fetchLaunch = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getLaunchStart());
    const query = LaunchQuery;
    query.query._id = id;
    console.log(id);
    const launches = await getData<Launch>(LAUNCHES_QUERY, query);
    dispatch(getLaunchSuccess(launches));
  } catch (err) {
    dispatch(getLaunchFail());
  }
};
