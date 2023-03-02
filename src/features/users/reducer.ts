import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSliceWithFilters } from "../filters/reducer";

export type UsersState = {
  allUsers: string[];
};

const initialState: UsersState = { allUsers: [] };

export const usersSlice = createSliceWithFilters({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<string>) => {
      state.allUsers = [...state.allUsers, payload];
    },
  },
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
