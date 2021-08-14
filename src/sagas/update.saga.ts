import { AnyAction } from "redux";
import { call, takeEvery } from "redux-saga/effects";
import { ME_UPDATE } from "../actions/action.constants";
import updateData from "../APIs/Profile/Update";

function* meUpdating(action: AnyAction): Generator<any> {
  console.log("me updating!!");

  const updateResponse = yield call(updateData, action.payload);
  if (updateResponse) {
    window.location.href = "/dashboard";
  }
}

export function* watchMeUpdating() {
  yield takeEvery(ME_UPDATE, meUpdating);
}
