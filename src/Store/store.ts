import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Reducer, AnyAction, createStore } from "redux";
import { GroupDataStream } from "../Models/Groups";
import { User } from "../Models/User";

const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
const GROUPS_FETCH = "groups/fetch";

export interface AppState {
  me?: User;
  groups: GroupDataStream[];
  isSidebarOpen: boolean;
}

const initialState: AppState = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
};

const reducer: Reducer<AppState> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };
    case GROUPS_FETCH:
      return { ...currentState, groups: dispatchedAction.payload };
    default:
      return currentState;
  }
};

export const store = createStore(reducer);

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});
export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});
export const groupsFetchAction = (groupData: GroupDataStream[]) => ({
  type: GROUPS_FETCH,
  payload: groupData,
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
