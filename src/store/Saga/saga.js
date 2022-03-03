import { call, takeEvery, put, select } from "redux-saga/effects";
import { AddHandler, fetchData } from "../action/homeAction";

import axios from "axios";

export function* fetchDataSaga(action) {
  yield put({ type: "SET_LOADING", data: true });
  try {
    //CALL - block the execution and wait for api response
    let result = yield call(() => {
      return axios.get(`https://reqres.in/api/users?page=${action.page}`);
    });

    yield put({ type: "ITEMS", data: result.data.data, page: action.page }); //PUT - dispatch the action to redux
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  } finally {
    yield put({ type: "SET_LOADING", data: false });
  }
}

function* logger(action) {
  const state = yield select();

  console.log("action", action);
  console.log("state after", state);
}

export default function* rootSaga() {
  yield takeEvery(fetchData().type, fetchDataSaga); // TAKE EVERY - accept every calls
  yield takeEvery("*", logger); //every dispatch log monitor
}
