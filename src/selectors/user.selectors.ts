import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

export const userSelector = createSelector([userStateSelector], (user) => user.byId);