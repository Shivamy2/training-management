import { watchMeSendingData } from "./auth.saga";
import { watchGroupQueryChanged } from "./groups.saga";
import { watchFetchUser } from "./user.saga";

const rootSaga = [watchMeSendingData, watchGroupQueryChanged, watchFetchUser];

export default rootSaga;
