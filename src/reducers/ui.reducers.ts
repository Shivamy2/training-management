import { AnyAction, Reducer } from "redux";
import {
  UI_SIDEBAR,
  UI_SIDEBAR_SELECTED_ITEM,
} from "../actions/action.constants";

export interface UiState {
  sidebarStatus: boolean;
  sidebarSelectedItem: { path: string; name: string };
}

export const initialState: UiState = {
  sidebarStatus: true,
  sidebarSelectedItem: { path: "/dashboard", name: "dashboard" },
};

export const uiReducer: Reducer<UiState> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case UI_SIDEBAR:
      return { ...state, sidebarStatus: action.payload };
    case UI_SIDEBAR_SELECTED_ITEM:
      const { path, name } = action.payload;
      return { ...state, sidebarSelectedItem: { path: path, name: name } };
    default:
      return state;
  }
};
