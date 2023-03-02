import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";
import { createFiltersSelector } from "../filters/selectors";
import { itemsReducer } from "./reducer";

const selectItems = ({ items }: RootState) => items;

const prop =
  <T extends Record<string, unknown>, K extends keyof T>(key: K) =>
  (obj: T) =>
    obj[key];

export const selectAllItems = createSelector(selectItems, prop("allItems"));

export const itemsFilterSelectors = createFiltersSelector("items");
