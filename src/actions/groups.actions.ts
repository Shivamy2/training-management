import { GroupDataStream } from "../Models/Groups";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_QUERY_CHANGED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
} from "./action.constants";

export const groupsFetchAction = (
  groupDataById: { [id: number]: GroupDataStream },
  keyword: string
) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { groupDataById, keyword },
});

export const groupUpdateQueryAction = (query: string) => ({
  type: GROUP_QUERY_CHANGED,
  payload: query,
});
export const groupfetchOneAction = (id: number) => ({
  type: GROUP_FETCH_ONE,
  payload: id,
});
export const groupFetchOneCompletedAction = (group: GroupDataStream) => ({
  type: GROUP_FETCH_ONE_COMPLETED,
  payload: group,
});

export const groupFetchOneError = (id: number, message: string) => ({
  type: GROUP_FETCH_ONE_ERROR,
  payload: { id, message },
});
