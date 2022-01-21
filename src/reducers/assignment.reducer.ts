import { Reducer } from "redux";
import {
  ASSIGNMENT_SAVE,
  ASSIGNMENT_UPLOAD,
  ASSIGNMENT_UPLOAD_ERROR,
  ASSIGNMENT_UPLOAD_LOADING,
} from "../actions/action.constants";
import { AssignmentResponse } from "../APIs/Assignment/assignment";

export interface AssignmentState {
  loading: boolean;
  errorMessage: string;
  byId: { [id: number]: AssignmentResponse };
  assignments: number[];
}

const initialState: AssignmentState = {
  loading: false,
  errorMessage: "",
  byId: {},
  assignments: [],
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

    case ASSIGNMENT_SAVE: {
      const assignment = action.payload.data as AssignmentResponse;
      return {
        ...state,
        byId: { ...state.byId, [assignment.id]: assignment },
        assignments: [...state.assignments, assignment.id],
      };
    }

    default:
      return state;
  }
};
