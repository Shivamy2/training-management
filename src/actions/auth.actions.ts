import { bindActionCreators } from "redux";
import {
  LoginCredentialsRequest,
  MeRequest,
  SignUpCredential,
} from "../APIs/Auth/auth";
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
  ME_SIGNUP,
  ME_SIGNUP_ERROR_MESSAGE,
  ME_SIGNUP_LOADING,
  CHECK_DETAILS,
  SAVE_CHECK_DETAIL_STATUS,
  IS_CHECK_RESPONSE_RECEIVED,
} from "./action.constants";

export const meSignup = (data: SignUpCredential) => ({
  type: ME_SIGNUP,
  payload: data,
});

export const meSignUpLoading = (status: boolean) => ({
  type: ME_SIGNUP_LOADING,
  payload: status,
});

export const meSignUpError = (message: string) => ({
  type: ME_SIGNUP_ERROR_MESSAGE,
  payload: message,
});

export const meFetchAction = (user: AuthUser) => ({
  type: ME_FETCH,
  payload: user,
});
export const meFetchUserAction = () => ({
  type: ME_FETCH_USER,
});

export const checkDetailsStatus = (status: boolean) => ({
  type: SAVE_CHECK_DETAIL_STATUS,
  payload: status,
});

export const checkDetails = () => ({
  type: CHECK_DETAILS,
});

export const isCheckReponse = (message: string) => ({
  type: IS_CHECK_RESPONSE_RECEIVED,
  payload: message,
});

export const meLoginAction = (user: AuthUser) => ({
  type: ME_LOGIN,
  payload: user,
});
export const meUpdate = (data: MeRequest) => ({
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
