import { AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { ME_SENDING_DATA } from "../actions/action.constants";
import {
  meIsLoading,
  meLoginAction,
  meLoginErrorMessageAction,
} from "../actions/auth.actions";
import { login } from "../APIs/Auth/auth";

function* meSendingData(action: AnyAction): Generator<any> {
  console.log("sending data is running");

  yield put(meLoginErrorMessageAction(""));
  const userResponse: any = yield call(login, action.payload);

  if (userResponse) {
    console.log(userResponse);
    yield put(meLoginAction(userResponse.data.user));
    window.location.href = "/dashboard";
  } else {
    console.error("Error occured while logging in");
    yield put(meIsLoading(false));
    yield put(meLoginErrorMessageAction("User Not Found"));
  }
}

export function* watchMeSendingData() {
  yield takeEvery(ME_SENDING_DATA, meSendingData);
}
