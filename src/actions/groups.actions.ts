import { GroupDataStream } from "../Models/Groups";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_QUERY_CHANGED,
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

export const updateQueryAction = (query: string) => ({
  type: GROUP_QUERY_CHANGED,
  payload: query,
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
