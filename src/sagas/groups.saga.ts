import { call, put, takeLatest, delay } from "redux-saga/effects";
import { AnyAction } from "redux";
import { GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { groupsFetchAction } from "../actions/groups.actions";
import { fetchGroupData } from "../APIs/GroupsData/groupsData";
import { store } from "../Store/store";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(200);
  const groupsResponse: any = yield call(fetchGroupData, {
    status: "all-groups",
    query: action.payload,
  });

  yield put(
    store.dispatch(groupsFetchAction(groupsResponse.data.data, action.payload))
  );
}

export function* watchGroupQueryChanged() {
  console.log("WatchGroupQueryChanged Called!");
  yield takeLatest(GROUP_QUERY_CHANGED, fetchGroups);
}
