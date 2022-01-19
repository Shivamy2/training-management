import { createSelector } from "reselect";
import { assignmentSelector } from "./app.selectors";

export const assignmentLoading = createSelector(
  [assignmentSelector],
  (assignment) => assignment.loading
);

export const assignmentError = createSelector(
  [assignmentSelector],
  (assignment) => assignment.errorMessage
);
