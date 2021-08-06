import React from "react";
import { useParams } from "react-router-dom";
import { groupActions } from "../../actions/action.constants";
import { groupSelectedSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store/store";

interface Props {}
interface Params {
  selectedGroupId: string;
}

const GroupDetailsPage: React.FC<Props> = () => {
  const { selectedGroupId } = useParams<Params>();
  groupActions.selectedId(+selectedGroupId);
  const selectedGroupDetails = useAppSelector(groupSelectedSelector);
  return (
    <div>
      <div>{selectedGroupDetails.name}</div>
      <div>{selectedGroupDetails.id}</div>
      <div>{selectedGroupDetails.updated_at}</div>
    </div>
  );
};

GroupDetailsPage.defaultProps = {};

export default React.memo(GroupDetailsPage);
