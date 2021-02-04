import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "../actionTypes";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "../actions";

function* asyncFetchRequest(action) {
  try {
    const url = `https://reqres.in/api/users/${action.payload}`;
    const response = yield call(() => axios.get(url));
    yield put(fetchDataSuccess(response.data.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* watchFetchDataSaga() {
  yield takeEvery(types.REQUESTED, asyncFetchRequest);
}
