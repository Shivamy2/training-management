import { GroupRequest, fetchGroupData } from "../APIs/GroupsData/groupsData";
import { groupLoadingStatusSelector } from "../selectors/groups.selectors";
import { store } from "../Store/store";

export const fetchGroups = (request: GroupRequest) => {
  // const queryLoading = groupLoadingStatusSelector(store.getState());
  // const query = request.query;
  // const loadingStatus = queryLoading[query];
  // groupActions.queryChanged(query);
  // if (loadingStatus) {
  //   return;
  // }
  // fetchGroupData(request).then((groups) => {
  //   groupActions.groups(groups?.data.data!, query);
  // });
};
