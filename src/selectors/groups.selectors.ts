import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";
import { userSelector } from "./user.selectors";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (group) => group.query
);
export const groupMappedData = createSelector(
  [groupStateSelector],
  (group) => group.mappedData
);
export const groupIdSelector = createSelector(
  [groupStateSelector],
  (group) => group.byId
);

export const groupLoadingStatusSelector = createSelector(
  [groupStateSelector],
  (group) => group.loadingList
);

export const groupCreatorSelector = createSelector(
  [groupStateSelector],
  (group) => group.creatorId
);
export const groupMemberIdsSelector = createSelector(
  [groupStateSelector],
  (group) => group.memberIds
);

export const groupDataSelector = createSelector(
  [groupQuerySelector, groupIdSelector, groupMappedData],
  (query, groupMapped, ids) => {
    const groupIds = (ids && ids[query]) || [];
    const mappedData = groupIds.map((id) => groupMapped && groupMapped[id]);
    return mappedData;
  }
);

// 10: {id:[10,30]}

export const groupOneLoading = createSelector(
  [groupStateSelector],
  (groups) => {
    return groups.loadingOne;
  }
);
export const groupErrorMessage = createSelector(
  [groupStateSelector],
  (groups) => {
    return groups.errorMessage;
  }
);

export const groupSelectedIdSelector = createSelector(
  [groupStateSelector],
  (groups) => {
    return groups.selectedId;
  }
);

export const groupSelectedSelector = createSelector(
  [groupSelectedIdSelector, groupIdSelector],
  (selectedId, idMappedGroups) => {
    const groupSelected =
      selectedId === undefined
        ? undefined
        : idMappedGroups && idMappedGroups[selectedId];
    return groupSelected;
  }
);

export const groupCreatorDetailsSelector = createSelector(
  [groupSelectedIdSelector, groupCreatorSelector, userSelector],
  (selectedGroupId, creatorIds, users) => {
    const creatorId =
      selectedGroupId === undefined ? undefined : creatorIds[selectedGroupId];
    const creatorDetails =
      users && (creatorId === undefined ? undefined : users[creatorId]);
    return creatorDetails;
  }
);

export const groupMembersListSelector = createSelector(
  [groupSelectedIdSelector, groupMemberIdsSelector, userSelector],
  (selectedGroupId, memberIds, users) => {
    const memberId =
      selectedGroupId === undefined ? undefined : memberIds[selectedGroupId];
    const membersDetail = memberId && memberId?.map((id) => users && users[id]);
    return membersDetail;
  }
);
