import axios, { Canceler } from "axios";
import { groupActions } from "../actions/action.constants";
import { GroupRequest, fetchGroupData } from "../APIs/GroupsData/groupsData";

let canceller: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;

  groupActions.query(query);

  canceller && canceller();
  const { cancel, token } = axios.CancelToken.source();

  canceller = cancel;

  fetchGroupData(request, token).then((groups) => {
    groupActions.groups(groups?.data.data!, query);
    canceller = undefined;
  });
};
