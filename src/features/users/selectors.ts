import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { createFiltersSelector } from "../filters/selectors";

const selectUsers = (state: RootState) => state.users;

export const selectAllUsers = createSelector(
  selectUsers,
  ({ allUsers }) => allUsers
);

export const usersFilterSelectors = createFiltersSelector("users");
