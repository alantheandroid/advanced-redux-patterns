import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LoadingState = {
  [K: string]: boolean;
};

export const initialState: LoadingState = {};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingEnabled: (state, { payload }: PayloadAction<string>) => {
      state[payload] = true;
    },
    loadingDisabled: (state, { payload }: PayloadAction<string>) => {
      state[payload] = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
