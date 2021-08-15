import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USERS_FETCHING_COMPLETED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_COMPLETE,
  USER_FETCH_ONE_ERROR,
} from "../actions/action.constants";
import { AuthUser } from "../Models/AuthUser";
import { User } from "../Models/Users";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
  select,
  setErrorMessage,
} from "./entity.reducers";

export interface UserState extends EntityState<AuthUser> {}

const initialState: UserState = {
  ...initialEntityState,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const newState = addOne(state, action.payload) as UserState;
      return { ...newState, loadingList: true };

    case USERS_FETCHING_COMPLETED:
      const groups = action.payload as User[];
      const getUserIds = getIds(groups);

      const newUserState = addMany(state, action.payload) as UserState;
      return {
        ...newUserState,
        loadingList: false,
        mappedData: { ...state.mappedData, all: getUserIds },
      };

    case USER_FETCH_ONE:
      return select(state, action.payload) as UserState;

    case USER_FETCH_ONE_COMPLETE:
      return addOne(state, action.payload, false) as UserState;

    case USER_FETCH_ONE_ERROR:
      const { id, message } = action.payload;
      return setErrorMessage(state, id, message) as UserState;
    default:
      return state;
  }
};
