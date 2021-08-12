import { bindActionCreators } from "redux";
import { LoginCredentialsRequest } from "../APIs/Auth/auth";
import { User } from "../Models/User";
import { store } from "../Store/store";
import {
  ME_FETCH,
  ME_LOADING_STOP,
  ME_LOGIN,
  ME_LOGIN_ERROR_MESSAGE,
  ME_SENDING_DATA,
} from "./action.constants";

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});

export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});
export const meSendingDataAction = (data: LoginCredentialsRequest) => ({
  type: ME_SENDING_DATA,
  payload: data,
});
export const meLoginErrorMessageAction = (message: string) => ({
  type: ME_LOGIN_ERROR_MESSAGE,
  payload: message,
});

export const meIsLoading = (status: boolean) => ({
  type: ME_LOADING_STOP,
  payload: status,
});

export const authActions = bindActionCreators(
  {
    fetch: meFetchAction,
    login: meLoginAction,
  },
  store.dispatch
);
