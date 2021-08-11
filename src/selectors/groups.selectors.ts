import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

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
  (group) => group.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupLoadingStatusSelector, groupQuerySelector],
  (loadingMap, query) => {
    return loadingMap[query];
  }
);

export const groupDataSelector = createSelector(
  [groupQuerySelector, groupIdSelector, groupMappedData],
  (query, groupMapped, ids) => {
    const groupIds = ids[query] || [];
    const mappedData = groupIds.map((id) => groupMapped[id]);
    return mappedData;
  }
);

// 10: {id:, }

export const groupSelectedIdSelector = createSelector(
  [groupStateSelector],
  (groups) => {
    return groups.selectedId;
  }
);

export const groupSelectedSelector = createSelector(
  [groupSelectedIdSelector, groupIdSelector],
  (selectedId, idMappedGroups) => {
    const groupSelected = idMappedGroups[selectedId] || [];
    return groupSelected;
  }
);
