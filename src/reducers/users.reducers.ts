import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/auth.actions";
import { User } from "../Models/User";
import { EntityState } from "./entity.reducers";

export interface UserState extends EntityState<User> {}

const initialState: UserState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const user: User = action.payload;
      return { ...state, byId: { ...state.byId, [user.id]: user } };
    default:
      return state;
  }
};
