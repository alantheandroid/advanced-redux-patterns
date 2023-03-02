import {
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  createSlice,
} from "@reduxjs/toolkit";

export type FilterState = {
  filters: {
    selected: unknown[];
    allSelected: boolean;
  };
};

export const initialFilterState: FilterState = {
  filters: {
    selected: [],
    allSelected: false,
  },
};

export const createSliceWithFilters = <
  T,
  Reducer extends SliceCaseReducers<T & FilterState>
>({
  name,
  initialState,
  reducers,
}: {
  name: string;
  initialState: T;
  reducers: ValidateSliceCaseReducers<T & FilterState, Reducer>;
}) => {
  return createSlice({
    name,
    initialState: { ...initialState, ...initialFilterState },
    reducers: {
      selectAll: (state, action: PayloadAction<boolean>) => {
        state.filters.allSelected = action.payload;
      },
      addSelected: (state, action: PayloadAction<string>) => {
        state.filters.selected.push(action.payload);
      },
      ...reducers,
    },
  });
};
