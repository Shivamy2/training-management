import { AnyAction, Reducer } from "redux";
import {
  IS_CHECK_RESPONSE_RECEIVED,
  SAVE_CHECK_DETAIL_STATUS,
  UI_SIDEBAR,
  UI_SIDEBAR_SELECTED_ITEM,
} from "../actions/action.constants";

export interface UiState {
  sidebarStatus: boolean;
  sidebarSelectedItem: { path: string; name: string };
  detailStatus?: boolean;
  isDetailReceived?: string;
}

export const initialState: UiState = {
  sidebarStatus: true,
  sidebarSelectedItem: { path: "/dashboard", name: "dashboard" },
  detailStatus: false,
  isDetailReceived: "",
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
    case SAVE_CHECK_DETAIL_STATUS: {
      return { ...state, detailStatus: action.payload };
    }
    case IS_CHECK_RESPONSE_RECEIVED: {
      return { ...state, isDetailReceived: action.payload };
    }
    default:
      return state;
  }
};
