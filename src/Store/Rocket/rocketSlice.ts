import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryResult, Rocket } from "../../Types";
import { AppThunk } from "../configureStore";
import { getRocket } from "../../API/spacexAPI";

export interface RocketState {
  rocket: QueryResult<Rocket>;
  loading: boolean;
}

const initialState: RocketState = {
  rocket: {
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

const rocket = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    getRocketStart(state) {
      state.loading = true;
    },
    getRocketSuccess(state, action: PayloadAction<QueryResult<Rocket>>) {
      state.rocket = action.payload;
      state.loading = false;
    },
    getRocketFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getRocketStart,
  getRocketSuccess,
  getRocketFail,
} = rocket.actions;

export default rocket.reducer;

export const fetchRocket = (vehicle: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getRocketStart());
    const launches = await getRocket(vehicle);
    dispatch(getRocketSuccess(launches));
  } catch (err) {
    dispatch(getRocketFail());
  }
};
