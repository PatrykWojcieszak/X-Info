import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import { configureStore, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
