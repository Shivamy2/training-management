import { bindActionCreators } from "redux";
import { store } from "../Store/store";
import { SIDEBAR_STATUS } from "./action.constants";

export const sidebarOpen = (status: boolean) => ({
  type: SIDEBAR_STATUS,
  payload: status,
});

export const sidebarActions = bindActionCreators(
  {
    sidebar: sidebarOpen,
  },
  store.dispatch
);
