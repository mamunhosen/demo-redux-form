import { take, call, all } from "redux-saga/effects";
import { watchFetchDataSaga } from "./fetchDataSagas";

export default function* rootSaga() {
  yield all([watchFetchDataSaga()]);
}
