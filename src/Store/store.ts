import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Reducer, AnyAction, createStore, compose } from "redux";
import { GroupDataStream } from "../Models/Groups";
import { User } from "../Models/User";

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
const GROUPS_FETCH = "groups/fetch";
const SIDEBAR_STATUS = "sidebar/open";
const NEW_QUERY = "query/update";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface AppState {
  me?: User;
  query: string;
  groupIds: {[keyword: string]: number[]};
  groupKeyMappedData: {[id: number]: GroupDataStream};
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  me: undefined,
  groupIds: {},
  query: "",
  groupKeyMappedData: {},
  isSidebarOpen: true,
};

const reducer: Reducer<AppState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...state, me: action.payload };

    case GROUPS_FETCH:
      const groups = action.payload.groupData as GroupDataStream[];
      const groupIds = groups.map((items) => items.id);
      const groupsIdReference = groups.reduce((previous, item) => {
        return {...previous, [item.id]: item}
      }, {});
      return {...state, groupIds: {...state.groupIds, [action.payload.keyword]: groupIds},
      groupKeyMappedData: {...state.groupKeyMappedData, ...groupsIdReference}};

    case NEW_QUERY:
      return {...state, query: action.payload};

    case SIDEBAR_STATUS:
      return { ...state, isSidebarOpen: action.payload };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers());

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});
export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});
export const groupsFetchAction = (groupData: GroupDataStream[], keyword: string) => ({
  type: GROUPS_FETCH,
  payload: {groupData, keyword},
});
export const updateQuery = (query: string) => ({
  type: NEW_QUERY,
  payload: query,
});
export const sidebarOpen = (status: boolean) => ({
  type: SIDEBAR_STATUS,
  payload: status,
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
