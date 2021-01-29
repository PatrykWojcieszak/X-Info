import { QueryResult, Launch } from "./../../Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../configureStore";
import { getLaunches } from "../../API/spacexAPI";

interface UpcomingLaunchState {
  upcomingLaunches: QueryResult<Launch>;
  loading: boolean;
}

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

const upcomingLaunches = createSlice({
  name: "upcomingLaunches",
  initialState,
  reducers: {
    getUpcomingLaunchesStart(state) {
      state.loading = true;
    },
    getUpcomingLaunchesSuccess(
      state,
      action: PayloadAction<QueryResult<Launch>>
    ) {
      state.upcomingLaunches = action.payload;
      state.loading = false;
    },
    getUpcomingLaunchesFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getUpcomingLaunchesStart,
  getUpcomingLaunchesSuccess,
  getUpcomingLaunchesFail,
} = upcomingLaunches.actions;

export default upcomingLaunches.reducer;

export const fetchUpcomingLaunches = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUpcomingLaunchesStart());
    const launches = await getLaunches();
    dispatch(getUpcomingLaunchesSuccess(launches));
  } catch (err) {
    dispatch(getUpcomingLaunchesFail());
  }
};
