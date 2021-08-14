import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOADING_STOP,
  ME_LOGIN,
  ME_LOGIN_ERROR_MESSAGE,
  ME_SENDING_DATA,
} from "../actions/action.constants";
import { AuthUser } from "../Models/AuthUser";
import { EntityState, initialEntityState } from "./entity.reducers";

export interface AuthState extends EntityState<AuthUser> {
  id?: number;
}

const initialValue: AuthState = {
  ...initialEntityState,
};

export const authReducer: Reducer<AuthState> = (
  state = initialValue,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const userId: number = action.payload.id;
      return { ...state, id: userId, loadingOne: false };
    case ME_SENDING_DATA:
      return { ...state, loadingOne: true };
    case ME_LOADING_STOP:
      return { ...state, loadingOne: action.payload };

    case ME_LOGIN_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
