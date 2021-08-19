import { normalize } from "normalizr";
import { Reducer } from "redux";
import {
  GROUPS_QUERY_COMPLETED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_QUERY_CHANGED,
  GROUP_FETCH_ONE_ERROR,
} from "../actions/action.constants";
import { GroupDataStream } from "../Models/Groups";
import { groupSchema } from "../Models/schemas";
import {
  EntityState,
  initialEntityState,
  select,
  setErrorMessage,
} from "./entity.reducers";

export interface GroupState extends EntityState<GroupDataStream> {
  query: string;
  // creatorIds: { [groupId: number]: number };
  // memberIds: { [groupId: number]: number[] };
}

const initialState: GroupState = {
  ...initialEntityState,
  query: "",
  // creatorIds: {},
  // memberIds: {},
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

    case GROUPS_QUERY_COMPLETED: {
      const groupDataById = action.payload.groupDataById;
      console.log(groupDataById);

      const groupIdsInString = groupDataById ? Object.keys(groupDataById) : [];
      const groupIds = groupIdsInString.map((id) => Number(id));
      return {
        ...state,
        mappedData: {
          ...state.mappedData,
          [action.payload.keyword]: groupIds,
        },
        byId: { ...state.byId, ...groupDataById },
        loadingList: false,
      };
    }

    case GROUP_FETCH_ONE:
      console.log(action.payload);

      return select(state, action.payload) as GroupState;

    case GROUP_FETCH_ONE_COMPLETED:
      const group = action.payload as GroupDataStream;
      const data = normalize(group, groupSchema);
      return {
        ...state,
        byId: { ...state.byId, ...data.entities.groups },
        loadingOne: false,
      };

    case GROUP_FETCH_ONE_ERROR:
      const { id, message } = action.payload;
      return setErrorMessage(state, id, message) as GroupState;
    default:
      return state;
  }
};
