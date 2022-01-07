import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { CHECK_DETAILS } from "../actions/action.constants";
import { checkDetailsStatus, isCheckReponse } from "../actions/auth.actions";
import { checkUserDetails } from "../APIs/Auth/auth";

function* checkDetails(action: AnyAction): Generator<any> {
  try {
    const response: any = yield call(checkUserDetails);
    console.log("Check Details Status: ", response);

    yield put(checkDetailsStatus(response?.data?.isPresent));
    yield put(isCheckReponse("yes"));
  } catch (error) {
    console.log("Error while checking details: ", error);
  }
}

export function* watchUI() {
  yield all([takeEvery(CHECK_DETAILS, checkDetails)]);
}
