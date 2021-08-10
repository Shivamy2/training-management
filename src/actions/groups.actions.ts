import { bindActionCreators } from "redux";
import { GroupDataStream } from "../Models/Groups";
import { store } from "../Store/store";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_QUERY,
  GROUP_SELECTED,
  GROUP_SELECTED_ID,
} from "./action.constants";

export const groupsFetchAction = (
  groupData: GroupDataStream[],
  keyword: string
) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { groupData, keyword },
});

export const updateQueryAction = (query: string, loading: boolean) => ({
  type: GROUP_QUERY,
  payload: { query, loading },
});
export const selectedIdAction = (id: number) => ({
  type: GROUP_SELECTED_ID,
  payload: id,
});
export const selectedGroupAction = (
  group: GroupDataStream,
  id: string,
  query: string
) => ({
  type: GROUP_SELECTED,
  payload: { group, id, query },
});

export const groupActions = bindActionCreators(
  {
    query: updateQueryAction,
    groups: groupsFetchAction,
    selectedId: selectedIdAction,
    selectedGroup: selectedGroupAction,
  },
  store.dispatch
);
