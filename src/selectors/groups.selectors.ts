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

/* const groupMappedData = (state: AppState) => {
  const groupState = groupSelector(state);
  return groupState.mappedData;
};

const groupIdSelector = (state: AppState) => {
  const groupState = groupSelector(state);
  return groupState.byId;
};

export const groupDataSelector = (state:AppState) => {
    const groupById = groupIdSelector(state);
    const groupsIds = groupById[groupQuerySelector(state)];
    const groupMappedKeys = groupMappedData(state);
    const groups = groupsIds.map((ids => groupMappedKeys[ids]));
    return groups;
} */

export const groupDataSelector = createSelector(
  [groupQuerySelector, groupMappedData, groupIdSelector],
  (query, groupMapped, ids) => {
    const groupIds = ids[query];
    const mappedData = groupIds.map((id) => groupMapped[id]);
    return mappedData;
  }
);
