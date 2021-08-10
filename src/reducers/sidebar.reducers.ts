import { Reducer } from "redux";
import { SIDEBAR_STATUS } from "../actions/action.constants";

export interface SidebarReducer {
  isSidebarOpen: boolean;
}

const initialState = {
  isSidebarOpen: true,
};

export const sidebarReducer: Reducer<SidebarReducer> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SIDEBAR_STATUS:
      return { ...state, isSidebarOpen: action.payload };
    default:
      return state;
  }
};
