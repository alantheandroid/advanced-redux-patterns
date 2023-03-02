import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./items/reducer";
import { itemsSaga } from "./items/saga";
import { loadingReducer } from "./loading/reducer";
import { usersReducer } from "./users/reducer";

const rootReducer = {
  users: usersReducer,
  items: itemsReducer,
  loading: loadingReducer,
};

function* rootSaga() {
  yield all([itemsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export type ReducerName = keyof RootState;
export type RootState = ReturnType<typeof store.getState>;
