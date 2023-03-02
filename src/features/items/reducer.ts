import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createSliceWithFilters } from "../filters/reducer";

export type ItemState = {
  allItems: string[];
};

const initialState: ItemState = { allItems: [] };

export const itemsSlice = createSliceWithFilters({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<string>) => {
      state.allItems = [...state.allItems, payload];
    },
  },
});

export const itemsActions = {
  ...itemsSlice.actions,
  fetchItems: createAction("items/fetchItems"),
};
export const itemsReducer = itemsSlice.reducer;
