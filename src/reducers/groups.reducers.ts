import { Reducer } from "redux";
import {
  GROUPS_FETCH,
  GROUP_QUERY,
  GROUP_SELECTED_ID,
} from "../actions/groups.actions";
import { GroupDataStream } from "../Models/Groups";

export interface GroupState {
  byId: {
    [keyword: string]: number[];
  };
  query: string;
  mappedData: { [id: number]: GroupDataStream };
  selectedId: number;
}

const initialState = {
  byId: {},
  mappedData: {},
  query: "",
  selectedId: -1,
};

export const groupsReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      return { ...state, query: action.payload };
    case GROUPS_FETCH:
      const groupData: GroupDataStream[] = action.payload.groupData;
      console.log(groupData);

      const groupIds = groupData.map((user) => user.id);
      const groupMapping = groupData.reduce((previous, data) => {
        return { ...previous, [data.id]: data };
      }, {});

      return {
        ...state,
        byId: { ...state.byId, [action.payload.keyword]: groupIds },
        mappedData: { ...state.mappedData, ...groupMapping },
      };
    case GROUP_SELECTED_ID:
      return { ...state, selectedId: action.payload };
    default:
      return state;
  }
};
