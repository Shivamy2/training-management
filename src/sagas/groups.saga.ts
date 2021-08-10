import { call, put, takeEvery } from "redux-saga/effects";
import { AnyAction } from "redux";
import { GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { groupsFetchAction } from "../actions/groups.actions";
import { fetchGroupData } from "../APIs/GroupsData/groupsData";
import { store } from "../Store/store";

export function* fetchGroups(action: AnyAction): Generator<any> {
  const groups: any = yield call(fetchGroupData, {
    status: "all-groups",
    query: action.payload,
  });

  yield put(
    store.dispatch(groupsFetchAction(groups?.data.data!, action.payload))
  );
}

export function* watchGroupQueryChanged() {
  console.log("WatchGroupQueryChanged Called!");
  yield takeEvery(GROUP_QUERY_CHANGED, fetchGroups);
}
