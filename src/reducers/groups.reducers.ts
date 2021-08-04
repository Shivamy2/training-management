import { Reducer } from "redux";
import { GROUPS_FETCH, GROUP_QUERY } from "../actions/groups.actions";
import { GroupDataStream } from "../Models/Groups";

export interface GroupState {
  byId: {
    [keyword: string]: number[];
  };
  query: string;
  mappedData: { [id: number]: GroupDataStream };
}

const initialState = {
  byId: {},
  mappedData: {},
  query: "",
};

export const groupsReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      return { ...state, query: action.payload};
    case GROUPS_FETCH:
      const groupData: GroupDataStream[] = action.payload.groupData;
      const groupIds = groupData.map((user) => user.id);
      console.log(groupIds);
      const groupMapping = groupData.reduce((previous, data) => {
        return { ...previous, [data.id]: data };
      }, {});
      console.log(groupMapping);
      
      return {
        ...state,
        byId: {...state.byId, [action.payload.keyword]: groupIds},
        mappedData: {...state.mappedData, ...groupMapping}
      };
    default:
      return state;
  }
};
