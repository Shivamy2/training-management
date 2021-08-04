import { User } from "../Models/User";

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";

export const meFetchAction = (user: User) => ({
  type: ME_FETCH,
  payload: user,
});

export const meLoginAction = (user: User) => ({
  type: ME_LOGIN,
  payload: user,
});

