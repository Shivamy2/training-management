import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { ME_UPDATE } from "../actions/action.constants";
import {
  meLoginErrorMessageAction,
  meUpdateLoading,
} from "../actions/auth.actions";
import { meDpUpload, meSendData } from "../APIs/Auth/auth";

function* meUpdating(action: AnyAction): Generator<any> {
  console.log("me updating!!");

  try {
    yield call(meSendData, action.payload.data);
    yield call(meDpUpload, action.payload.dp);
    yield put(meUpdateLoading(false));
    window.location.href = "/dashboard";
  } catch (error) {
    yield put(meUpdateLoading(false));
    yield put(meLoginErrorMessageAction("Not able to submit data"));
  }
}

export function* watchMeUpdating() {
  yield takeEvery(ME_UPDATE, meUpdating);
}
