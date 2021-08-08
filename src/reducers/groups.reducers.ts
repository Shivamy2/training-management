import { Reducer } from "redux";
import {
  GROUPS_FETCH,
  GROUP_QUERY,
  GROUP_SELECTED,
  GROUP_SELECTED_ID,
} from "../actions/groups.actions";
import { GroupDataStream } from "../Models/Groups";
import { addMany, EntityState, getIds } from "./entity.reducers";

export interface GroupState extends EntityState<GroupDataStream> {
  query: string;
  mappedData: { [keyword: string]: number[] };
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

      const groupIds = getIds(groupData);
      const newState = addMany(state, groupData) as GroupState;

      return {
        ...newState,
        mappedData: {
          ...newState.mappedData,
          [action.payload.keyword]: groupIds,
        },
      };
    case GROUP_SELECTED_ID:
      return { ...state, selectedId: action.payload };
    case GROUP_SELECTED:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload.group,
        },
      };
    default:
      return state;
  }
};
