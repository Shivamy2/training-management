import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

export const authSelector = createSelector(
  [authStateSelector, userStateSelector],
  (auth, user) =>
    auth.id === undefined ? undefined : user.byId && user.byId[auth.id]
);

export const authLoginErrorMessageSelector = createSelector(
  [authStateSelector],
  (auth) => auth.errorMessage
);

export const authLoginLoadingSelector = createSelector(
  [authStateSelector],
  (auth) => auth.loadingOne
);

export const authSignupErrorSelector = createSelector(
  [authStateSelector],
  (auth) => auth.signupError
);

export const authSignupLoadingSelector = createSelector(
  [authStateSelector],
  (auth) => auth.signupLoading
);

export const updateLoading = createSelector(
  [authStateSelector],
  (auth) => auth.loadingUpdate
);
