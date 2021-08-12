import { Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOADING_STOP,
  ME_LOGIN,
  ME_LOGIN_ERROR_MESSAGE,
  ME_SENDING_DATA,
} from "../actions/action.constants";

export interface AuthState {
  id?: number;
  isLoading: boolean;
  errorMessage: string;
}

const initialValue: AuthState = {
  isLoading: false,
  errorMessage: "",
};

export const authReducer: Reducer<AuthState> = (
  state = initialValue,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const userId: number = action.payload.id;
      return { ...state, id: userId, isLoading: false };
    case ME_SENDING_DATA:
      return { ...state, isLoading: true };
    case ME_LOADING_STOP:
      return { ...state, isLoading: action.payload };

    case ME_LOGIN_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
