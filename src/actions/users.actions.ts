import { User } from "../Models/Users";
import {
  USERS_FETCHING,
  USERS_FETCHING_COMPLETED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_COMPLETE,
  USER_FETCH_ONE_ERROR,
  USER_LIST_RECEIVED,
} from "./action.constants";

export const usersFetchAction = () => ({
  type: USERS_FETCHING,
});
export const usersFetchCompleted = (users: User) => ({
  type: USERS_FETCHING_COMPLETED,
  payload: users,
});
export const userListReceived = (userById: { [id: number]: User }) => ({
  type: USER_LIST_RECEIVED,
  payload: userById,
});

export const userFetchOne = (id: number) => ({
  type: USER_FETCH_ONE,
  payload: id,
});

export const userFetchOneCompleted = (users: User) => ({
  type: USER_FETCH_ONE_COMPLETE,
  payload: users,
});

export const userFetchOneError = (id: number, message: string) => ({
  type: USER_FETCH_ONE_ERROR,
  payload: { id, message },
});
