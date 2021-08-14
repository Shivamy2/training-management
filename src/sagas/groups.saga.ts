import { call, put, takeLatest, delay } from "redux-saga/effects";
import { AnyAction } from "redux";
import { GROUP_QUERY_CHANGED } from "../actions/action.constants";
import { groupsFetchAction } from "../actions/groups.actions";
import { fetchGroupData } from "../APIs/GroupsData/groupsData";

export function* fetchGroups(action: AnyAction): Generator<any> {
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

  yield put(groupsFetchAction(groupsResponse.data.data, action.payload));
}

export function* watchGroupQueryChanged() {
  yield takeLatest(GROUP_QUERY_CHANGED, fetchGroups);
}
