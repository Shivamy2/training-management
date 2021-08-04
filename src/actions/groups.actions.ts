import { GroupDataStream } from "../Models/Groups";

export const GROUP_QUERY = "query/update";
export const GROUPS_FETCH = "groups/fetch";


export const groupsFetchAction = (groupData: GroupDataStream[], keyword: string) => ({
    type: GROUPS_FETCH,
    payload: {groupData, keyword},
  });

export const updateQuery = (query: string) => ({
    type: GROUP_QUERY,
    payload: query,
});
