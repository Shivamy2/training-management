import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useHistory, useParams } from "react-router-dom";
import { userFetchOne, usersFetchAction } from "../../../actions/users.actions";
import Alert from "../../../Components/Alert/Alert";
import Avatar from "../../../Components/Avatar/Avatar";
import Button from "../../../Components/Button/Button";
import { brokenImageReplacement } from "../../../Constants/constants";
import {
  userFetchErrorSelector,
  userLoadingOneSelector,
  userMappedDataSelector,
  userSelectedSelector,
} from "../../../selectors/user.selectors";
import { store, useAppSelector } from "../../../Store/store";

interface Props {}
interface Params {
  selectedUserId: string;
}

const GroupDetailsPage: React.FC<Props> = () => {
  const { selectedUserId } = useParams<Params>();
  const isLoading = useAppSelector(userLoadingOneSelector);
  const errorMessage = useAppSelector(userFetchErrorSelector);
  const history = useHistory();

  useEffect(() => {
    store.dispatch(usersFetchAction());
  }, []); //eslint-disable-line

  // finding the index of current select id
  const userMappedIds = useAppSelector(userMappedDataSelector);
  const indexOfCurrentSelectedId =
    userMappedIds && userMappedIds["all"]?.indexOf(+selectedUserId);

  // finding the length of total ids found for displaying the remaining users in button text
  let totalUserIds = userMappedIds && userMappedIds["all"];
  let prevButtonStatus = true,
    nextButtonStatus = true;
  const userIdsLength = totalUserIds?.length;

  if (indexOfCurrentSelectedId! >= userIdsLength! - 1) {
    nextButtonStatus = false;
  }
  if (indexOfCurrentSelectedId! < 1) {
    prevButtonStatus = false;
  }

  //finding the group corresponding to the groupid
  useEffect(() => {
    store.dispatch(userFetchOne(+selectedUserId));
  }, [selectedUserId]); //eslint-disable-line

  //extracting the selected group data
  const userSelected = useAppSelector(userSelectedSelector);

  return (
    <div className="w-full min-h-full">
      {isLoading && (
        <div>
          <ImSpinner9 className="animate-spin h-6 w-6 mx-auto" />
        </div>
      )}
      {!userSelected ? (
        <div className="pt-5 max-w-420 mx-auto">
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
                      userSelected.profile_pic_url
                        ? userSelected.profile_pic_url
                        : brokenImageReplacement
                    }
                  />
                </div>
                <div className="space-y-3 md-lg:space-y-0 md-lg:flex-1 md-lg:pr-20">
                  <div className="mt-3 md:flex">
                    <p className="font-bold">Name: &nbsp;</p>
                    {`${userSelected.first_name} ${userSelected.last_name}`}
                    <p className="font-bold md:ml-5 mt-5 md:mt-0">
                      Email: &nbsp;
                    </p>
                    {userSelected.email}
                  </div>
                  <span className="font-bold">Creator's Role: &nbsp;</span>

                  <div className="col-sm-6">
                    <span className="font-bold">Id: &nbsp;</span>
                    {userSelected.id ? userSelected.id : "Unknown"}
                  </div>
                  <div className="space-y-3 md:flex md:flex-col md:flex-1 md:mt-4">
                    <span className="font-bold">Education: &nbsp;</span>
                    {userSelected.education
                      ? userSelected.education
                      : "Not Available"}
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
                    userIdsLength ? `- ${indexOfCurrentSelectedId}` : ""
                  }`}
                  onClick={() => {
                    history.push(
                      `/users/${totalUserIds![indexOfCurrentSelectedId! - 1]}`
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
                    userIdsLength
                      ? `- ${userIdsLength - indexOfCurrentSelectedId! - 1}`
                      : ""
                  }`}
                  onClick={() =>
                    history.push(
                      `/users/${totalUserIds![indexOfCurrentSelectedId! + 1]}`
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
