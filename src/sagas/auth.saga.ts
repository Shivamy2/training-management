import { AnyAction } from "redux";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ME_SENDING_DATA, ME_SIGNUP } from "../actions/action.constants";
import {
  meIsLoading,
  meLoginErrorMessageAction,
  meSignUpError,
  meSignUpLoading,
} from "../actions/auth.actions";
import { login, role, signup } from "../APIs/Auth/auth";

function* meSendingData(action: AnyAction): Generator<any> {
  yield put(meLoginErrorMessageAction(""));
  try {
    const userResponse: any = yield call(login, action.payload);
    console.log("User Response while logging in: ", userResponse);
    window.location.href = "/register";
  } catch (error) {
    yield put(meIsLoading(false));
    yield put(meLoginErrorMessageAction("Invalid Credentials"));
  }
}

function* meSendingSignupData(action: AnyAction): Generator<any> {
  yield put(meSignUpError(""));
  try {
    let data = action.payload;
    const response: any = yield call(signup, {
      email: data.email,
      username: data.username,
      password: data.password,
    });
    const roleResponse: any = yield call(role, data.roles);
    yield call(login, {
      username: data.username,
      password: data.password,
    });
    console.log(response);
    console.log(roleResponse);
    window.location.href = "/register";
  } catch (error: any) {
    yield put(meSignUpError(error.response.data.message));
    yield put(meSignUpLoading(false));
  }
}

export function* watchMeSendingData() {
  yield all([
    takeEvery(ME_SENDING_DATA, meSendingData),
    takeEvery(ME_SIGNUP, meSendingSignupData),
  ]);
}
