import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { ME_UPDATE } from "../actions/action.constants";
import { meLoginErrorMessageAction } from "../actions/auth.actions";
import { meSendData } from "../APIs/Auth/auth";

function* meUpdating(action: AnyAction): Generator<any> {
  console.log("me updating!!");

  try {
    yield call(meSendData, action.payload);
    window.location.href = "/dashboard";
  } catch (error) {
    yield put(meLoginErrorMessageAction("Not able to submit data"));
  }
}

export function* watchMeUpdating() {
  yield takeEvery(ME_UPDATE, meUpdating);
}
