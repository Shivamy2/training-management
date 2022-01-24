import { Reducer } from "redux";
import {
  ASSIGNMENT_FETCH,
  ASSIGNMENT_FETCH_LOADING_LIST,
  ASSIGNMENT_FETCH_SAVE,
  ASSIGNMENT_SAVE,
  ASSIGNMENT_SUBMIT,
  ASSIGNMENT_SUBMIT_ERROR,
  ASSIGNMENT_SUBMIT_LOADING,
  ASSIGNMENT_SUBMIT_DATA,
  ASSIGNMENT_UPLOAD,
  ASSIGNMENT_UPLOAD_ERROR,
  ASSIGNMENT_UPLOAD_LOADING_ONE,
  ASSIGNMENT_SUBMIT_FETCH,
  ASSIGNMENT_SUBMIT_FETCH_LOADING,
  ASSIGNMENT_SUBMIT_FETCH_ERROR,
} from "../actions/action.constants";
import {
  AssignmentResponse,
  AssignmentSubmitResponse,
} from "../APIs/Assignment/assignment";
import { EntityState } from "./entity.reducers";

export interface AssignmentState extends EntityState<AssignmentResponse> {
  assignments: number[];
}

export interface AssignmentSubmitState
  extends EntityState<AssignmentSubmitResponse> {
  submitAssignments: number[];
}

const initialSubmitState: AssignmentSubmitState = {
  submitAssignments: [],
  loadingOne: false,
  loadingList: false,
  byId: {},
};

const initialState: AssignmentState = {
  loadingList: false,
  loadingOne: false,
  errorMessage: "",
  byId: {},
  assignments: [],
};

export const assignmentSubmitReducer: Reducer<AssignmentSubmitState> = (
  state = initialSubmitState,
  action
) => {
  switch (action.type) {
    case ASSIGNMENT_SUBMIT: {
      return { ...state, loadingOne: true };
    }

    case ASSIGNMENT_SUBMIT_LOADING: {
      return { ...state, loadingOne: action.payload };
    }

    case ASSIGNMENT_SUBMIT_ERROR: {
      return { ...state, errorMessage: action.payload };
    }

    case ASSIGNMENT_SUBMIT_FETCH: {
      return { ...state, loadingList: true };
    }

    case ASSIGNMENT_SUBMIT_FETCH_LOADING: {
      return { ...state, loadingList: action.payload };
    }

    case ASSIGNMENT_SUBMIT_FETCH_ERROR: {
      return { ...state, errorMessage: action.payload };
    }

    case ASSIGNMENT_SUBMIT_DATA: {
      const assignmentSubmitdDetails = action.payload as AssignmentSubmitResponse[];
      const assignmentSubmitList: number[] = [];
      const assignmentSubmitData = assignmentSubmitdDetails.reduce(
        (prev, assignmentSubmit) => {
          assignmentSubmitList.push(assignmentSubmit.id);
          return { ...prev, [assignmentSubmit.id]: assignmentSubmit };
        },
        {}
      );
      return {
        ...state,
        byId: { ...state.byId, ...assignmentSubmitData },
        submitAssignments: [
          ...state.submitAssignments,
          ...assignmentSubmitList,
        ],
        loadingList: false,
      };
    }
    default:
      return state;
  }
};

export const assignmentReducer: Reducer<AssignmentState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ASSIGNMENT_UPLOAD: {
      return { ...state, loadingOne: true };
    }
    case ASSIGNMENT_UPLOAD_ERROR: {
      return { ...state, errorMessage: action.payload };
    }
    case ASSIGNMENT_UPLOAD_LOADING_ONE: {
      return { ...state, loadingOne: action.payload };
    }

    case ASSIGNMENT_SAVE: {
      const assignment = action.payload.data as AssignmentResponse;
      const date = new Date(JSON.parse(assignment.dueDate));
      const due_date = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} 11:59:00 PM`;
      return {
        ...state,
        byId: {
          ...state.byId,
          [assignment.id]: { ...assignment, dueDate: due_date },
        },
        assignments: [...state.assignments, assignment.id],
      };
    }

    case ASSIGNMENT_FETCH: {
      return { ...state, loadingList: true };
    }

    case ASSIGNMENT_FETCH_LOADING_LIST: {
      return { ...state, loadingList: action.payload };
    }

    case ASSIGNMENT_FETCH_SAVE: {
      const assignments = action.payload.data as AssignmentResponse[];
      const assignmentsMapped = assignments.reduce((prev, assignment) => {
        const date = new Date(JSON.parse(assignment.dueDate));
        const due_date = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} 11:59:00 PM`;
        const today = new Date();
        const isActiveCheck =
          date.getDate() >= today.getDate()
            ? date.getMonth() >= today.getMonth()
              ? date.getFullYear() >= today.getFullYear()
                ? true
                : false
              : false
            : date.getMonth() > today.getMonth()
            ? true
            : false;
        return {
          ...prev,
          [assignment.id]: {
            ...assignment,
            dueDate: due_date,
            isActive: isActiveCheck,
          },
        };
      }, {});
      const ids: number[] = [];
      assignments.forEach((assignment) => ids.push(assignment.id));
      return {
        ...state,
        loadingList: false,
        byId: { ...state.byId, ...assignmentsMapped },
        assignments: [...state.assignments, ...ids],
      };
    }

    default:
      return state;
  }
};
