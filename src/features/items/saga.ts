import { takeLatest, delay, put } from "redux-saga/effects";
import { loadingActions } from "../loading/reducer";
import { withLoading } from "../loading/saga";
import { itemsActions } from "./reducer";

function* fetchItemsSaga() {
  yield delay(1000);
  yield put(itemsActions.addItem("new item"));
}

export function* itemsSaga() {
  yield takeLatest(
    itemsActions.fetchItems.toString(),
    withLoading("items", fetchItemsSaga)
  );
}
