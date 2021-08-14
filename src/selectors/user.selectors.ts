import { FaUserFriends } from "react-icons/fa";
import { createSelector } from "reselect";
import { authStateSelector, userStateSelector } from "./app.selectors";

export const userSelector = createSelector(
  [userStateSelector],
  (user) => user.byId
);

export const userLoadingSelector = createSelector(
  [userStateSelector],
  (user) => user.loadingList
);

export const userMappedDataSelector = createSelector(
  [userStateSelector],
  (user) => user.mappedData
);

export const userMappedFilteredDataSelector = createSelector(
  [userMappedDataSelector, authStateSelector],
  (user, auth) => {
    const userIds = (user && user["all"]) || [];
    userIds.filter((id) => id !== auth.id);
    return userIds;
  }
);

export const userListSelector = createSelector(
  [userMappedFilteredDataSelector, userSelector],
  (userIds, users) => {
    const userData = userIds.map((id) => users[id]);
    return userData;
  }
);
