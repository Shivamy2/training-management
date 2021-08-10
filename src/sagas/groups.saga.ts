import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroupData } from "../APIs/GroupsData/groupsData";
import { groupMappedData } from "../selectors/groups.selectors";
import { store } from "../Store/store";

export const fetchGroups = (request: GroupRequest) => {
  const queryMap = groupMappedData(store.getState());
  const query = request.query;
  const groupIds = queryMap[query];
  groupActions.query(query, !groupIds);
  if (groupIds) {
    return;
  }

  fetchGroupData(request).then((groups) => {
    groupActions.groups(groups?.data.data!, query);
  });
};
