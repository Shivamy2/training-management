import { call, put, takeEvery } from "redux-saga/effects";
import { ME_FETCH_USER } from "../actions/action.constants";
import { meFetchAction } from "../actions/auth.actions";
import { me } from "../APIs/Auth/auth";

function* fetchUser(): Generator<any> {
  const userResponse: any = yield call(me);
  if (userResponse) {
    yield put(meFetchAction(userResponse));
  } else {
    console.log("Not able to send data");
  }
}

export function* watchFetchUser() {
  yield takeEvery(ME_FETCH_USER, fetchUser);
}
