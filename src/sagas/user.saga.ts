import { AnyAction } from "redux";
import { all, call, delay, fork, put, takeEvery } from "redux-saga/effects";
import {
  ME_FETCH_USER,
  USERS_FETCHING,
  USER_FETCH_ONE,
} from "../actions/action.constants";
import {
  meFetchAction,
  meLoginErrorMessageAction,
} from "../actions/auth.actions";
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
  while (true) {
    try {
      const userResponse: any = yield call(me);
      yield put(meFetchAction(userResponse.data));
    } catch (error: any) {
      yield put(meLoginErrorMessageAction(error?.response?.data?.message));
    }
    yield delay(30000);
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
  } catch (error: any) {
    console.log("Not able to fetch selected user");
    const errorMessage =
      error.response.data?.message || "Something Wrong Happened";
    yield put(userFetchOneError(action.payload, errorMessage));
  }
}

export function* watchMeApiCalling() {
  yield takeEvery(ME_FETCH_USER, fetchUser);
}

export function* watchFetchUser() {
  yield all([
    fork(watchMeApiCalling),
    takeEvery(USERS_FETCHING, fetchUsers),
    takeEvery(USER_FETCH_ONE, fetchSelectedUser),
  ]);
}
