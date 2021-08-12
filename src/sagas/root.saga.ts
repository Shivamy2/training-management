import { watchMeSendingData } from "./auth.saga";
import { watchGroupQueryChanged } from "./groups.saga";

const rootSaga = [watchMeSendingData, watchGroupQueryChanged];

export default rootSaga;
