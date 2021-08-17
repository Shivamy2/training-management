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
  creatorIds: { [groupId: number]: number };
  memberIds: { [groupId: number]: number[] };
}

const initialState: GroupState = {
  ...initialEntityState,
  query: "",
  creatorIds: {},
  memberIds: {},
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
      const groups = action.payload.groupData as GroupDataStream[];
      console.log(groups);

      const participantIds = groups.reduce((participantIdsById, group) => {
        const participants = group.participants.map(
          (participants) => participants?.id
        );
        return { ...participantIdsById, [group?.id]: participants };
      }, {});

      const creatorIds = groups.reduce((creatorIdById, group) => {
        return { ...creatorIdById, [group?.id]: group?.creator?.id };
      }, {});

      const groupIds = getIds(groups);
      const newState = addMany(state, groups, false) as GroupState;

      return {
        ...newState,
        mappedData: {
          ...newState.mappedData,
          [action.payload.keyword]: groupIds,
        },
        creatorIds: { ...newState.creatorIds, ...creatorIds },
        memberIds: { ...newState.memberIds, ...participantIds },
      };

    case GROUP_FETCH_ONE:
      console.log(action.payload);

      return select(state, action.payload) as GroupState;

    case GROUP_FETCH_ONE_COMPLETED:
      const group = action.payload as GroupDataStream;
      const currentSelectedGroup = addOne(
        state,
        action.payload,
        false
      ) as GroupState;
      const memberIds = getIds(group?.participants);
      return {
        ...currentSelectedGroup,
        ...currentSelectedGroup.byId,
        creatorIds: {
          ...currentSelectedGroup.creatorIds,
          [group?.id]: group.creator?.id,
        },
        memberIds: {
          ...currentSelectedGroup.memberIds,
          [group?.id]: memberIds,
        },
      };

    case GROUP_FETCH_ONE_ERROR:
      const { id, message } = action.payload;
      return setErrorMessage(state, id, message) as GroupState;
    default:
      return state;
  }
};
