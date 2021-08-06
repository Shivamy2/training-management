import { GroupDataStream } from "../Models/Groups";

export const GROUP_QUERY = "query/update";
export const GROUPS_FETCH = "groups/fetch";
export const GROUP_SELECTED_ID = "groups/selected_id";

export const groupsFetchAction = (
  groupData: GroupDataStream[],
  keyword: string
) => ({
  type: GROUPS_FETCH,
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
