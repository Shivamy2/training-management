import { createSelector } from "reselect";
import { AssignmentResponse } from "../APIs/Assignment/assignment";
import { assignmentSelector, assignmentSubmitSelector } from "./app.selectors";

export const assignmentLoadingOne = createSelector(
  [assignmentSelector],
  (assignment) => assignment.loadingOne
);

export const assignmentLoadingList = createSelector(
  [assignmentSelector],
  (assignment) => assignment.loadingList
);

export const assignmentError = createSelector(
  [assignmentSelector],
  (assignment) => assignment.errorMessage
);

export const assignmentDetailsSelector = createSelector(
  [assignmentSelector],
  (assignment) => assignment.byId
);

export const assignmentIdsSelector = createSelector(
  [assignmentSelector],
  (assignment) => assignment.assignments
);

export const assignmentSubmitLoadingSelector = createSelector(
  [assignmentSubmitSelector],
  (assignment) => assignment.loadingOne
);

export const assignmentMapDataSelector = createSelector(
  [assignmentIdsSelector, assignmentDetailsSelector],
  (ids, details) => {
    const data: AssignmentResponse[] = [];
    const helper: number[] = [];
    ids.forEach((id) => {
      if (!helper.includes(id)) {
        details && data.push(details[id]);
        helper.push(id);
      }
    });
    return data;
  }
);
