import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

export const authSelector = createSelector(
  [authStateSelector, userStateSelector],
  (auth, user) => (auth.id === undefined ? undefined : user.byId[auth.id])
);
