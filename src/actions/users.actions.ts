import { User } from "../Models/Users";
import { USERS_FETCHING, USERS_FETCHING_COMPLETED } from "./action.constants";

export const usersFetchAction = () => ({
  type: USERS_FETCHING,
});
export const usersFetchCompleted = (users: User) => ({
  type: USERS_FETCHING_COMPLETED,
  payload: users,
});
