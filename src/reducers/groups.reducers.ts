import { Reducer } from "redux";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_QUERY_CHANGED,
  GROUP_FETCH_ONE_ERROR,
} from "../actions/action.constants";
import { GroupDataStream } from "../Models/Groups";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
  select,
  setErrorMessage,
} from "./entity.reducers";

export interface GroupState extends EntityState<GroupDataStream> {
  query: string;
  mappedData: { [keyword: string]: number[] };
}

const initialState: GroupState = {
  ...initialEntityState,
  mappedData: {},
  query: "",
};

export const groupsReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY_CHANGED:
      return {
        ...state,
        query: action.payload,
        loadingList: true,
      };

    case GROUPS_QUERY_COMPLETED:
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
        loadingList: false,
      };

    case GROUP_FETCH_ONE:
      console.log(action.payload);

      return select(state, action.payload) as GroupState;

    case GROUP_FETCH_ONE_COMPLETED:
      return addOne(state, action.payload, false) as GroupState;

    case GROUP_FETCH_ONE_ERROR:
      const { id, message } = action.payload;
      return setErrorMessage(state, id, message) as GroupState;
    default:
      return state;
  }
};
