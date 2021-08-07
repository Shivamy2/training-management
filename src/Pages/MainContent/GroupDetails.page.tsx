import React, { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";
import { useParams } from "react-router-dom";
import { groupActions } from "../../actions/action.constants";
import {
  fetchGroupData,
  fetchSelectedGroup,
} from "../../APIs/GroupsData/groupsData";
import Button from "../../Components/Button/Button";
import {
  groupIdSelector,
  groupSelectedSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../Store/store";

interface Props {}
interface Params {
  selectedGroupId: string;
  searchedQuery: string;
}

const GroupDetailsPage: React.FC<Props> = () => {
  const { searchedQuery, selectedGroupId } = useParams<Params>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchGroupData({
      status: "all-groups",
      query: searchedQuery,
    }).then((response) => {
      if (response?.status === 200) {
        groupActions.groups(response.data.data, searchedQuery);
      } else {
        console.error("Error Occured while fetching group data");
      }
    });
  }, [searchedQuery]);

  const groupIds = useAppSelector(groupIdSelector);
  const indexOfCurrentGroup = groupIds[searchedQuery]?.indexOf(
    +selectedGroupId
  );
  const [indexOfCurrentSelectedId, setIndexOfCurrentSelectedId] = useState(
    indexOfCurrentGroup
  );
  const [totalGroupIds, setTotalGroupIds] = useState(
    groupIds[indexOfCurrentSelectedId]
  );
  console.log("Index of Selected Group is: ", indexOfCurrentSelectedId);
  let prevButtonStatus = true,
    nextButtonStatus = true;
  const groupIdsLength = totalGroupIds?.length;
  console.log("Length of Id Array", groupIdsLength);

  if (indexOfCurrentSelectedId >= groupIdsLength - 1) {
    nextButtonStatus = false;
  }
  if (indexOfCurrentSelectedId < 1) {
    prevButtonStatus = false;
  }
  useEffect(() => {
    setIsLoading(true);
    groupActions.selectedId(+selectedGroupId);
    setTotalGroupIds(groupIds[searchedQuery]);

    const value =
      totalGroupIds && totalGroupIds[indexOfCurrentSelectedId]
        ? totalGroupIds[indexOfCurrentSelectedId].toString()
        : "234";
    fetchSelectedGroup(value).then((response) => {
      console.log(response?.data.data);
      groupActions.selectedGroup(
        response?.data.data!,
        selectedGroupId,
        searchedQuery
      );
      setIsLoading(false);
    });
  }, [
    selectedGroupId,
    searchedQuery,
    groupIds,
    indexOfCurrentSelectedId,
    totalGroupIds,
  ]);

  const { groupSelected } = useAppSelector(groupSelectedSelector);

  const creatorOfGroup = groupSelected?.creator;
  return !isLoading ? (
    <div>
      <div>{groupSelected.name}</div>
      <div>{groupSelected.id}</div>
      <div>
        {creatorOfGroup
          ? creatorOfGroup.first_name
            ? creatorOfGroup.first_name
            : "Unknown"
          : "Unknown"}
      </div>
      <div>{groupSelected.updated_at}</div>
      <div className="flex">
        {prevButtonStatus && (
          <Button
            type="button"
            theme="warning"
            buttonType="solid"
            text="Previous"
            onClick={() => {
              console.log("Previous Button is clicked!");
              setIndexOfCurrentSelectedId(indexOfCurrentSelectedId - 1);
            }}
          />
        )}
        {nextButtonStatus && (
          <Button
            type="button"
            theme="primary"
            buttonType="solid"
            text="Next"
            onClick={() => {
              console.log("Next Button is clicked!");
              setIndexOfCurrentSelectedId(indexOfCurrentSelectedId + 1);
            }}
          />
        )}
      </div>
    </div>
  ) : (
    <div>
      <ImSpinner className="animate-spin h-6 w-6" />
    </div>
  );
};

GroupDetailsPage.defaultProps = {};

export default React.memo(GroupDetailsPage);
