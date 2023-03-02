import { createSelector } from "@reduxjs/toolkit";
import { ReducerName, RootState } from "../store";

const identity = <T>(x: T) => x;

export const createFiltersSelector = (reducerName: "items" | "users") => {
  const selectFilterState = createSelector(
    (state: RootState) => state[reducerName].filters,
    (x) => x
  );

  return {
    selectFilters: createSelector(
      selectFilterState,
      (filters) => filters.selected
    ),
    selectAllSelected: createSelector(
      selectFilterState,
      (filters) => filters.allSelected
    ),
  };
};
