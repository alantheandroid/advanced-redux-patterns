import { put, call } from "redux-saga/effects";
import { loadingActions } from "./reducer";

export function withLoading<A>(
  getKey: string | ((action: A) => string),
  saga: (action: A) => Generator
) {
  return function* sagaWithLoading(action: A) {
    const key = typeof getKey === "function" ? getKey(action) : getKey;
    try {
      yield put(loadingActions.loadingEnabled(key));
      yield call(saga, action);
    } finally {
      yield put(loadingActions.loadingDisabled(key));
    }
  };
}
