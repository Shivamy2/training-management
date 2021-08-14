import { watchMeSendingData } from "./auth.saga";
import { watchGroupQueryChanged } from "./groups.saga";
import { watchMeUpdating } from "./update.saga";
import { watchFetchUser } from "./user.saga";

const rootSaga = [
  watchMeSendingData,
  watchGroupQueryChanged,
  watchFetchUser,
  watchMeUpdating,
];

export default rootSaga;
