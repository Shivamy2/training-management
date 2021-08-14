import { bindActionCreators } from "redux";
import { LoginCredentialsRequest } from "../APIs/Auth/auth";
import { UpdateProfile } from "../APIs/Profile/Update";
import { AuthUser } from "../Models/AuthUser";
import { store } from "../Store/store";
import {
  ME_FETCH,
  ME_LOADING_STOP,
  ME_LOGIN,
  ME_LOGIN_ERROR_MESSAGE,
  ME_SENDING_DATA,
  ME_FETCH_USER,
  ME_UPDATE,
} from "./action.constants";

export const meFetchAction = (user: AuthUser) => ({
  type: ME_FETCH,
  payload: user,
});
export const meFetchUserAction = () => ({
  type: ME_FETCH_USER,
});

export const meLoginAction = (user: AuthUser) => ({
  type: ME_LOGIN,
  payload: user,
});
export const meUpdate = (data: UpdateProfile) => ({
  type: ME_UPDATE,
  payload: data,
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
