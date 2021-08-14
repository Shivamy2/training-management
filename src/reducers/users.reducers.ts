import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/action.constants";
import { User } from "../Models/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducers";

export interface UserState extends EntityState<User> {}

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
      return newState;
    default:
      return state;
  }
};
