import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  assignmentReducer,
  assignmentSubmitReducer,
} from "../reducers/assignment.reducer";
import { authReducer } from "../reducers/auth.reducers";
import { groupsReducer } from "../reducers/groups.reducers";
import { traineeReducer } from "../reducers/trainee.reducers";
import { uiReducer } from "../reducers/ui.reducers";
import { userReducer } from "../reducers/users.reducers";
import { sagaMiddleware } from "../sagas";
import rootSaga from "../sagas/root.saga";

const reducer = combineReducers({
  users: userReducer,
  groups: groupsReducer,
  auth: authReducer,
  ui: uiReducer,
  trainee: traineeReducer,
  assignment: assignmentReducer,
  assignmentSubmit: assignmentSubmitReducer,
});

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

export type AppState = ReturnType<typeof store.getState>;

export const store = createStore(reducer, devTools);

sagaMiddleware.run(rootSaga);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
