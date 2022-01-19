import { all, fork } from "redux-saga/effects";
import { watchAssignment } from "./assignment.saga";
import { watchMeSendingData } from "./auth.saga";
import { watchGroupQueryChanged } from "./groups.saga";
import { watchTrainee } from "./trainee.saga";
import { watchUI } from "./ui.saga";
import { watchMeUpdating } from "./update.saga";
import { watchFetchUser } from "./user.saga";

export function* rootSaga() {
  yield all([
    fork(watchMeSendingData),
    fork(watchGroupQueryChanged),
    fork(watchFetchUser),
    fork(watchMeUpdating),
    fork(watchUI),
    fork(watchTrainee),
    fork(watchAssignment),
  ]);
}

export default rootSaga;
