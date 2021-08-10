import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "../reducers/auth.reducers";
import { groupsReducer } from "../reducers/groups.reducers";
import { sidebarReducer } from "../reducers/sidebar.reducers";
import { userReducer } from "../reducers/users.reducers";
import { sagaMiddleware } from "../sagas";
import { watchGroupQueryChanged } from "../sagas/groups.saga";

const reducer = combineReducers({
  users: userReducer,
  groups: groupsReducer,
  auth: authReducer,
  sidebar: sidebarReducer,
});

export type AppState = ReturnType<typeof store.getState>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGroupQueryChanged);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
