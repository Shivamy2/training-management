import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, compose, combineReducers } from "redux";
import { authReducer} from "../reducers/auth.reducers";
import { groupsReducer } from "../reducers/groups.reducers";
import { sidebarReducer } from "../reducers/sidebar.reducers";
import { userReducer } from "../reducers/users.reducers";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  users: userReducer,
  groups: groupsReducer,
  auth: authReducer,
  sidebar: sidebarReducer
});

type AppState = ReturnType<typeof store.getState>;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers());

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
