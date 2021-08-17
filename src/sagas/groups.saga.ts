import {
  call,
  put,
  takeLatest,
  delay,
  all,
  takeEvery,
} from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  GROUP_FETCH_ONE,
  GROUP_QUERY_CHANGED,
} from "../actions/action.constants";
import {
  groupFetchOneCompletedAction,
  groupFetchOneError,
  groupsFetchAction,
} from "../actions/groups.actions";
import { fetchGroupData, fetchSelectedGroup } from "../APIs/GroupsData/groups";
import { normalize } from "normalizr";
import { groupSchema } from "../Models/schemas";
import { userListReceived } from "../actions/users.actions";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);

  const groupsResponse: any = yield call(fetchGroupData, {
    status: "all-groups",
    query: action.payload,
  });

  console.log(
    call(fetchGroupData, {
      status: "all-groups",
      query: action.payload,
    })
  );

  const data = normalize(groupsResponse.data.data, [groupSchema]);
  console.log(data);

  yield put(groupsFetchAction(data.entities.groups as any, action.payload));
  yield put(userListReceived(data.entities.users as any));
}

function* fetchOneGroup(action: AnyAction): Generator<any> {
  console.log("fetch One Group called");

  try {
    const groupResponse: any = yield call(fetchSelectedGroup, action.payload);
    console.log(groupResponse);
    yield put(groupFetchOneCompletedAction(groupResponse.data.data));
  } catch (error) {
    console.log(error.response);

    console.log("Not able to fetch", action.payload, "group");
    const errorMessage: string =
      error.response.data?.message || "Error occurred while fetching group";
    yield put(groupFetchOneError(action.payload, errorMessage));
  }
}

export function* watchGroupQueryChanged() {
  yield all([
    takeLatest(GROUP_QUERY_CHANGED, fetchGroups),
    takeEvery(GROUP_FETCH_ONE, fetchOneGroup),
  ]);
}
