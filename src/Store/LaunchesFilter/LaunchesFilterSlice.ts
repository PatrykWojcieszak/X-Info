import { DropdownElement } from "./../../Types/Dropdown";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LaunchSitesDDList,
  LaunchStatusDDList,
  rocketsDDList,
} from "../../Other/DDLists";
import { changeDDElementToTrue } from "../../Utility/Utility";

interface Filter {
  name: string;
  value: DropdownElement[] | number;
}

export interface LaunchesFilterState {
  filters: Filter[];
}

const startingDate = new Date("2006").getTime();
const endDate = new Date(
  new Date().setFullYear(new Date().getFullYear() + 1)
).getTime();

const initialState: LaunchesFilterState = {
  filters: [
    {
      name: "rocket",
      value: rocketsDDList,
    },
    {
      name: "dateFrom",
      value: startingDate,
    },
    {
      name: "dateTo",
      value: endDate,
    },
    {
      name: "launchSite",
      value: LaunchSitesDDList,
    },
    {
      name: "status",
      value: LaunchStatusDDList,
    },
  ],
};

const launchesFilter = createSlice({
  name: "launchesFilter",
  initialState,
  reducers: {
    clearFilter(state) {
      state.filters = initialState.filters;
    },
    setFilterRocket(state, action: PayloadAction<{ id: number }>) {
      state.filters[0].value = changeDDElementToTrue(
        state.filters[0].value as DropdownElement[],
        action.payload.id
      );
    },
    setFilterDateFrom(state, action: PayloadAction<{ date: Date }>) {
      state.filters[1].value = action.payload.date.getTime();
    },
    setFilterDateTo(state, action: PayloadAction<{ date: Date }>) {
      state.filters[2].value = action.payload.date.getTime();
    },
    setLaunchpadFilter(state, action: PayloadAction<{ id: number }>) {
      state.filters[3].value = changeDDElementToTrue(
        state.filters[3].value as DropdownElement[],
        action.payload.id
      );
    },
    setLaunchStatusFilter(state, action: PayloadAction<{ id: number }>) {
      state.filters[4].value = changeDDElementToTrue(
        state.filters[4].value as DropdownElement[],
        action.payload.id
      );
    },
  },
});

export const {
  clearFilter,
  setFilterRocket,
  setFilterDateFrom,
  setFilterDateTo,
  setLaunchpadFilter,
  setLaunchStatusFilter,
} = launchesFilter.actions;

export default launchesFilter.reducer;
