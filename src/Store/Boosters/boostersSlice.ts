import { BoostersQuery } from "./../../Queries/BoostersQuery";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getData, BOOSTER_QUERY } from "../../API/spacexAPI";
import { QueryResult, Booster } from "../../Types";
import { AppThunk } from "../configureStore";

export interface BoosterState {
  boosters: QueryResult<Booster>;
  loading: boolean;
}

const initialState: BoosterState = {
  boosters: {
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

const boosters = createSlice({
  name: "boosters",
  initialState,
  reducers: {
    getBoostersStart(state) {
      state.loading = true;
    },
    getBoostersSuccess(state, action: PayloadAction<QueryResult<Booster>>) {
      const tempBoosters = state.boosters.docs;
      state.boosters = action.payload;
      state.boosters.docs.unshift(...tempBoosters);
      state.loading = false;
    },
    getBoostersFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getBoostersStart,
  getBoostersSuccess,
  getBoostersFail,
} = boosters.actions;

export default boosters.reducer;

export const fetchBoosters = (page: number): AppThunk => async (dispatch) => {
  try {
    dispatch(getBoostersStart());
    const query = BoostersQuery;
    query.options.page = page;
    const boosters = await getData<Booster>(BOOSTER_QUERY, query);
    dispatch(getBoostersSuccess(boosters));
  } catch (err) {
    dispatch(getBoostersFail());
  }
};
