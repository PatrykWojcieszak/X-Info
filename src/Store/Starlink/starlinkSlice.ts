import { StarlinkQuery } from "./../../Queries";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QueryResult, Starlink } from "../../Types";
import { AppThunk } from "../configureStore";
import { getData, STARLINK_QUERY } from "../../API/spacexAPI";
interface StarlinkState {
  starlinks: QueryResult<Starlink>;
  loading: boolean;
}

const initialState: StarlinkState = {
  starlinks: {
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

const starlinks = createSlice({
  name: "starlinks",
  initialState,
  reducers: {
    getStarlinksStart(state) {
      state.loading = true;
    },
    getStarlinksSuccess(state, action: PayloadAction<QueryResult<Starlink>>) {
      state.starlinks = action.payload;
      state.loading = false;
    },
    getStarlinksFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getStarlinksStart,
  getStarlinksSuccess,
  getStarlinksFail,
} = starlinks.actions;

export default starlinks.reducer;

export const fetchStarlinks = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getStarlinksStart());
    const starlinks = await getData<Starlink>(STARLINK_QUERY, StarlinkQuery);
    dispatch(getStarlinksSuccess(starlinks));
  } catch (err) {
    dispatch(getStarlinksFail());
  }
};
