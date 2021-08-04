import { bindActionCreators } from "redux";
import { store } from "../Store/store";
import { meFetchAction, meLoginAction } from "./auth.actions";
import { groupsFetchAction, updateQuery } from "./groups.actions";
import { sidebarOpen } from "./sidebar.action";

export const groupActions = bindActionCreators(
  {
    query: updateQuery,
    groups: groupsFetchAction,
  },
  store.dispatch
);

export const authActions = bindActionCreators(
  {
    fetch: meFetchAction,
    login: meLoginAction,
  },
  store.dispatch
);

export const sidebarActions = bindActionCreators(
  {
    sidebar: sidebarOpen,
  },
  store.dispatch
);
