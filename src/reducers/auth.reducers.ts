import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOADING_STOP,
  ME_LOGIN,
  ME_LOGIN_ERROR_MESSAGE,
  ME_SENDING_DATA,
  ME_SIGNUP,
  ME_SIGNUP_LOADING,
  ME_SIGNUP_ERROR_MESSAGE,
  ME_UPDATE,
  ME_UPDATE_LOADING,
} from "../actions/action.constants";
import { AuthUser } from "../Models/AuthUser";
import { EntityState, initialEntityState } from "./entity.reducers";

export interface AuthState extends EntityState<AuthUser> {
  id?: number;
  signupError: string;
  signupLoading: boolean;
  loadingUpdate: boolean;
}

const initialValue: AuthState = {
  ...initialEntityState,
  signupError: "",
  signupLoading: false,
  loadingUpdate: false,
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
    case ME_SIGNUP:
      return { ...state, signupLoading: true };
    case ME_SIGNUP_LOADING:
      return { ...state, signupLoading: action.payload };
    case ME_SIGNUP_ERROR_MESSAGE:
      return { ...state, signupError: action.payload };
    case ME_LOGIN_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case ME_UPDATE: {
      return { ...state, loadingUpdate: true };
    }
    case ME_UPDATE_LOADING: {
      return { ...state, loadingUpdate: action.payload };
    }
    default:
      return state;
  }
};
