import React, { useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";
import { useHistory, useParams } from "react-router-dom";
import { groupActions } from "../../actions/action.constants";
import {
  fetchGroupData,
  fetchSelectedGroup,
} from "../../APIs/GroupsData/groupsData";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import { brokenImageReplacement } from "../../Constants/constants";
import {
  groupMappedData,
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
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect1 is running");

    fetchGroupData({
      status: "all-groups",
      query: searchedQuery,
    })
      .then((response) => {
        if (response?.status === 200) {
          groupActions.groups(response.data.data, searchedQuery);
        } else {
          console.error("Error Occured while fetching group data");
        }
      })
      .catch((error) => console.error("Can't fetch group Data", error));
  }, [searchedQuery]);

  const groupIds = useAppSelector(groupMappedData);
  // console.log(
  //   "Group Ids at index and selected Group Id",
  //   groupIds[searchedQuery]?.indexOf(+selectedGroupId),
  //   +selectedGroupId
  // );
  const indexOfCurrentSelectedId = groupIds[searchedQuery]?.indexOf(
    +selectedGroupId
  );
  // console.log("Index of Selected Group is: ", indexOfCurrentSelectedId);
  let totalGroupIds = groupIds[searchedQuery];

  let prevButtonStatus = true,
    nextButtonStatus = true;
  const groupIdsLength = totalGroupIds?.length;
  // console.log("Length of Id Array", groupIdsLength);

  if (indexOfCurrentSelectedId >= groupIdsLength - 1) {
    nextButtonStatus = false;
  }
  if (indexOfCurrentSelectedId < 1) {
    prevButtonStatus = false;
  }
  useEffect(() => {
    console.log("useEffect2 is running");

    setIsLoading(true);
    groupActions.selectedId(+selectedGroupId);

    const value =
      totalGroupIds && totalGroupIds[indexOfCurrentSelectedId]
        ? totalGroupIds[indexOfCurrentSelectedId].toString()
        : "234";
    fetchSelectedGroup(value).then((response) => {
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
    <div className="w-full h-full p-5 pb-20">
      <div className="bg-white border border-gray-300 rounded-t-md">
        <div className="p-4">
          <div className="mt-1 mb-10 ml-2">
            <h2 className="text-base font-bold tracking-wider uppercase text-input">
              Group Information
            </h2>
          </div>
          <div className="md-lg:flex md-lg:px-6 md-lg:space-x-10">
            <div className="pt-6 pr-6 md-lg:border-r md-lg:border-gray-300">
              <Avatar
                size="large"
                src={
                  groupSelected.group_image_url
                    ? groupSelected.group_image_url
                    : brokenImageReplacement
                }
              />
            </div>
            <div className="space-y-3 md-lg:space-y-0 md-lg:flex-1 md-lg:pr-20">
              <div className="mt-3 md:flex">
                <p className="font-bold">Name: &nbsp;</p>
                {groupSelected.name}
                <p className="font-bold md:ml-5 mt-5 md:mt-0">
                  Description: &nbsp;
                </p>
                {groupSelected.description}
              </div>
              <span className="font-bold">Creator's Role: &nbsp;</span>
              {creatorOfGroup
                ? creatorOfGroup.role
                  ? creatorOfGroup.role
                  : "Unknown"
                : "Unknown"}
              <div className="col-sm-6">
                <span className="font-bold">Id: &nbsp;</span>
                {groupSelected.id ? groupSelected.id : "Unknown"}
              </div>
              <div className="space-y-3 md:flex md:flex-col md:flex-1 md:mt-4">
                <span className="font-bold">Creator's Full Name: &nbsp;</span>
                {creatorOfGroup
                  ? creatorOfGroup.first_name
                    ? creatorOfGroup.first_name
                    : "Unknown"
                  : "Unknown"}
                &nbsp;
                {creatorOfGroup
                  ? creatorOfGroup.last_name
                    ? creatorOfGroup.last_name
                    : "Unknown"
                  : "Unknown"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-gray-900 profile-submit rounded-b-md">
        <div className="flex justify-between px-5 py-3">
          {prevButtonStatus && (
            <Button
              type="button"
              theme="warning"
              buttonType="outline"
              text={`Previous - ${indexOfCurrentSelectedId}`}
              onClick={() => {
                history.push(
                  `/groups/${searchedQuery}/${
                    totalGroupIds[indexOfCurrentSelectedId - 1]
                  }`
                );
              }}
            />
          )}
          {nextButtonStatus && (
            <Button
              type="button"
              theme="primary"
              buttonType="outline"
              text={`Next - ${groupIdsLength - indexOfCurrentSelectedId - 1}`}
              onClick={() =>
                history.push(
                  `/groups/${searchedQuery}/${
                    totalGroupIds[indexOfCurrentSelectedId + 1]
                  }`
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full w-full">
      <ImSpinner className="animate-spin h-6 w-6 m-auto" />
    </div>
  );
};

GroupDetailsPage.defaultProps = {};

export default React.memo(GroupDetailsPage);
