import { createSelector } from "reselect";
import { AuthUser } from "../Models/AuthUser";
import { traineeSelector } from "./app.selectors";
import { userSelector } from "./user.selectors";

export const bulkTraineeLoadingSelector = createSelector(
  [traineeSelector],
  (trainee) => trainee.loadingOne
);

export const bulkTraineeErrorMessageSelector = createSelector(
  [traineeSelector],
  (trainee) => trainee.errorMessage
);

export const traineeIdsSelector = createSelector(
  [traineeSelector],
  (trainee) => trainee.traineeIds
);

export const traineeDataLoadingSelector = createSelector(
  [traineeSelector],
  (trainee) => trainee.loadingList
);

export const traineeDetailsSelector = createSelector(
  [traineeIdsSelector, userSelector],
  (ids, mappedDetails) => {
    const data: AuthUser[] = [];
    const helper: number[] = [];
    ids.forEach((id) => {
      if (!helper.includes(id)) {
        mappedDetails && data.push(mappedDetails[id]);
        helper.push(id);
      }
    });
    return data;
  }
);
