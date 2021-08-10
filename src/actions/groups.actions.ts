import { GroupDataStream } from "../Models/Groups";

export const GROUP_QUERY = "query/update";
export const GROUPS_QUERY_COMPLETED = "groups/fetch";
export const GROUP_SELECTED_ID = "groups/selected_id";
export const GROUP_SELECTED = "groups/selected";

export const groupsFetchAction = (
  groupData: GroupDataStream[],
  keyword: string
) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { groupData, keyword },
});

export const updateQueryAction = (query: string) => ({
  type: GROUP_QUERY,
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
