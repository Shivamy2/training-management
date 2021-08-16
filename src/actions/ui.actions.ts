import { UI_SIDEBAR, UI_SIDEBAR_SELECTED_ITEM } from "./action.constants";

export const uiSidebarAction = (status: boolean) => ({
  type: UI_SIDEBAR,
  payload: status,
});

export const uiSidebarSelectedItemAction = (path: string, name: string) => ({
  type: UI_SIDEBAR_SELECTED_ITEM,
  payload: { path, name },
});
