import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USERS_FETCHING_COMPLETED,
} from "../actions/action.constants";
import { AuthUser } from "../Models/AuthUser";
import { User } from "../Models/Users";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
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
    default:
      return state;
  }
};
