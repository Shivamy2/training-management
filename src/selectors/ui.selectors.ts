import { createSelector } from "reselect";
import { uiStateSelector } from "./app.selectors";

export const uiSidebarStatusSelector = createSelector(
  [uiStateSelector],
  (ui) => ui.sidebarStatus
);

export const uiSidebarSelectedItemSelector = createSelector(
  [uiStateSelector],
  (ui) => ui.sidebarSelectedItem
);
export const uiSidebarSelectedItemPathSelector = createSelector(
  [uiSidebarSelectedItemSelector],
  (selectedItem) => selectedItem.path
);
export const uiSidebarSelectedItemNameSelector = createSelector(
  [uiSidebarSelectedItemSelector],
  (selectedItem) => selectedItem.name
);
export const detailsStatus = createSelector(
  [uiStateSelector],
  (ui) => ui.detailStatus
);

export const detailResponseReceived = createSelector(
  [uiStateSelector],
  (ui) => ui.isDetailReceived
);
