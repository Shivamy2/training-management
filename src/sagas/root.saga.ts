import { all, fork } from "redux-saga/effects";
import { watchMeSendingData } from "./auth.saga";
import { watchGroupQueryChanged } from "./groups.saga";
import { watchMeUpdating } from "./update.saga";
import { watchFetchUser } from "./user.saga";

// const rootSaga = [
// watchMeSendingData,
// watchGroupQueryChanged,
// watchFetchUser,
// watchMeUpdating,
// ];

export function* rootSaga() {
  yield all([
    fork(watchMeSendingData),
    fork(watchGroupQueryChanged),
    fork(watchFetchUser),
    fork(watchMeUpdating),
  ]);
}

export default rootSaga;
