import { bindActionCreators } from "redux";
import { User } from "../Models/User";
import { store } from "../Store/store";
import { ME_FETCH, ME_LOGIN } from "./action.constants";

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});

export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});

export const authActions = bindActionCreators(
  {
    fetch: meFetchAction,
    login: meLoginAction,
  },
  store.dispatch
);
