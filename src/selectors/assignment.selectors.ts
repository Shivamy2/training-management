import { createSelector } from "reselect";
import { AssignmentResponse } from "../APIs/Assignment/assignment";
import { assignmentSelector } from "./app.selectors";

export const assignmentLoading = createSelector(
  [assignmentSelector],
  (assignment) => assignment.loading
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

export const assignmentMapDataSelector = createSelector(
  [assignmentIdsSelector, assignmentDetailsSelector],
  (ids, details) => {
    const assignmentsData: AssignmentResponse[] = [];
    ids.map((id) => assignmentsData.push(details[id]));
    return assignmentsData;
  }
);
