import { AnyAction } from "redux";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  ME_FETCH_USER,
  USERS_FETCHING,
  USER_FETCH_ONE,
} from "../actions/action.constants";
import { meFetchAction } from "../actions/auth.actions";
import {
  userFetchOneCompleted,
  userFetchOneError,
  usersFetchCompleted,
} from "../actions/users.actions";
import { me } from "../APIs/Auth/auth";
import {
  fetchUsers as fetchUsersAPI,
  fetchSeletedUsers as fetchSelectedUserAPI,
} from "../APIs/Users/user";

function* fetchUser(): Generator<any> {
  const userResponse: any = yield call(me);
  if (userResponse) {
    yield put(meFetchAction(userResponse));
  } else {
    console.log("Not able to send data");
  }
}

function* fetchUsers(): Generator<any> {
  console.log("fetch users middleware is running!");
  try {
    const usersResponse: any = yield call(fetchUsersAPI);
    yield put(usersFetchCompleted(usersResponse));
  } catch (error) {
    console.log("Not able to fetch users");
  }
}

function* fetchSelectedUser(action: AnyAction): Generator<any> {
  console.log("fetching selected user");
  try {
    const user: any = yield call(fetchSelectedUserAPI, action.payload);
    yield put(userFetchOneCompleted(user));
  } catch (error) {
    console.log("Not able to fetch selected user");
    const errorMessage =
      error.response.data?.message || "Something Wrong Happened";
    yield put(userFetchOneError(action.payload, errorMessage));
  }
}

export function* watchFetchUser() {
  yield all([
    takeEvery(ME_FETCH_USER, fetchUser),
    takeEvery(USERS_FETCHING, fetchUsers),
    takeEvery(USER_FETCH_ONE, fetchSelectedUser),
  ]);
}
