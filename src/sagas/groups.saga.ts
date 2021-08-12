import { call, put, takeLatest, delay } from "redux-saga/effects";
import { AnyAction } from "redux";
import { GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { groupsFetchAction } from "../actions/groups.actions";
import { fetchGroupData } from "../APIs/GroupsData/groupsData";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);
  console.log(delay(500));
  // yield call(setTimeout, () => console.log("This is timeout"), 5000);
  // console.log(call(setTimeout, () => console.log("This is timeout"), 5000));

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

  yield put(groupsFetchAction(groupsResponse.data.data, action.payload));
}

export function* watchGroupQueryChanged() {
  console.log("WatchGroupQueryChanged Called!");
  yield takeLatest(GROUP_QUERY_CHANGED, fetchGroups);
}