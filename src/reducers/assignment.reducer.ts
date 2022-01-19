import { Reducer } from "redux";
import {
  ASSIGNMENT_UPLOAD,
  ASSIGNMENT_UPLOAD_ERROR,
  ASSIGNMENT_UPLOAD_LOADING,
} from "../actions/action.constants";

export interface AssignmentState {
  loading: boolean;
  errorMessage: string;
}

const initialState: AssignmentState = {
  loading: false,
  errorMessage: "",
};

export const assignmentReducer: Reducer<AssignmentState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ASSIGNMENT_UPLOAD: {
      return { ...state, loading: true };
    }
    case ASSIGNMENT_UPLOAD_ERROR: {
      return { ...state, errorMessage: action.payload };
    }
    case ASSIGNMENT_UPLOAD_LOADING: {
      return { ...state, loading: action.payload };
    }

    default:
      return state;
  }
};
