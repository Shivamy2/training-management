import React, { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import { useHistory, useParams } from "react-router-dom";
import {
  groupfetchOneAction,
  groupUpdateQueryAction,
} from "../../actions/groups.actions";
import Alert from "../../Components/Alert/Alert";
import Avatar from "../../Components/Avatar/Avatar";
import Button from "../../Components/Button/Button";
import { brokenImageReplacement } from "../../Constants/constants";
import {
  groupErrorMessage,
  groupMappedData,
  groupOneLoading,
  groupSelectedSelector,
} from "../../selectors/groups.selectors";
import { store, useAppSelector } from "../../Store/store";

interface Props {}
interface Params {
  selectedGroupId: string;
  searchedQuery: string;
}

const GroupDetailsPage: React.FC<Props> = () => {
  const { searchedQuery, selectedGroupId } = useParams<Params>();
  const isLoading = useAppSelector(groupOneLoading);
  const errorMessage = useAppSelector(groupErrorMessage);
  const history = useHistory();

  useEffect(() => {
    store.dispatch(groupUpdateQueryAction(searchedQuery));
  }, []); //eslint-disable-line

  // finding the index of current select id
  const groupIds = useAppSelector(groupMappedData);
  const indexOfCurrentSelectedId =
    groupIds && groupIds[searchedQuery]?.indexOf(+selectedGroupId);

  // finding the length of total ids found for a particular query for displaying the remaining groups in button text
  let totalGroupIds = groupIds && groupIds[searchedQuery];
  let prevButtonStatus = true,
    nextButtonStatus = true;
  const groupIdsLength = totalGroupIds?.length;

  if (indexOfCurrentSelectedId! >= groupIdsLength! - 1) {
    nextButtonStatus = false;
  }
  if (indexOfCurrentSelectedId! < 1) {
    prevButtonStatus = false;
  }

  //finding the group corresponding to the groupid
  useEffect(() => {
    store.dispatch(groupfetchOneAction(+selectedGroupId));
  }, [selectedGroupId]); //eslint-disable-line

  //extracting the selected group data
  const groupSelected = useAppSelector(groupSelectedSelector);

  const creatorOfGroup = groupSelected?.creator;
  return (
    <div className="w-full">
      {isLoading && (
        <div>
          <ImSpinner className="animate-spin h-6 w-6 m-auto" />
        </div>
      )}
      {!groupSelected ? (
        <div className="mt-5 max-w-420 mx-auto">
          {errorMessage && <Alert title={errorMessage} alertType="error" />}
        </div>
      ) : (
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
                    <span className="font-bold">
                      Creator's Full Name: &nbsp;
                    </span>
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
          <div className="min-h-16 bg-gray-900 profile-submit rounded-b-md">
            <div className="flex justify-between px-5 py-3">
              {prevButtonStatus && (
                <Button
                  type="button"
                  theme="warning"
                  buttonType="outline"
                  text={`Previous ${
                    groupIdsLength ? `- ${indexOfCurrentSelectedId}` : ""
                  }`}
                  onClick={() => {
                    history.push(
                      `/groups/${searchedQuery}/${
                        totalGroupIds![indexOfCurrentSelectedId! - 1]
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
                  text={`Next ${
                    groupIdsLength
                      ? `- ${groupIdsLength - indexOfCurrentSelectedId! - 1}`
                      : ""
                  }`}
                  onClick={() =>
                    history.push(
                      `/groups/${searchedQuery}/${
                        totalGroupIds![indexOfCurrentSelectedId! + 1]
                      }`
                    )
                  }
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

GroupDetailsPage.defaultProps = {};

export default React.memo(GroupDetailsPage);
