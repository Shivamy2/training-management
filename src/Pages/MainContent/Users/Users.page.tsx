import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import { usersFetchAction } from "../../../actions/users.actions";
import ListGroup from "../../../Components/ListGroup/ListGroup";
import {
  userListSelector,
  userLoadingSelector,
} from "../../../selectors/user.selectors";
import { store, useAppSelector } from "../../../Store/store";

interface Props {}

export const UsersPage: React.FC<Props> = () => {
  const usersData = useAppSelector(userListSelector);
  const isLoading = useAppSelector(userLoadingSelector);
  useEffect(() => {
    store.dispatch(usersFetchAction());
  }, []);

  if (isLoading) {
    return (
      <div className="w-full">
        <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full pt-2">
      <div>
        <div className="flex flex-wrap justify-center">
          {usersData?.map((item, index) => {
            let listExtraStyling = "";
            if (index === 0) listExtraStyling += " rounded-t-md ";
            else if (index === usersData.length - 1) {
              listExtraStyling += " rounded-b-md ";
            }
            const linkToNextId = `/users/${item.id}`;
            return (index & 1) === 1 ? (
              <Link to={linkToNextId} key={index}>
                <ListGroup
                  className={
                    "bg-search-icon shadow-stacked hover:shadow-none mt-5 md:ml-5 w-72 " +
                    listExtraStyling
                  }
                  infoClassName="text-white"
                  key={index}
                  title={`${item.first_name} ${item.last_name}`}
                  description={item.phone_number}
                  url={
                    item.profile_pic_url
                      ? item.profile_pic_url
                      : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  }
                />
              </Link>
            ) : (
              <Link to={linkToNextId} key={index}>
                <ListGroup
                  className={
                    "hover:bg-gray-100 bg-white hover:shadow-stacked mt-5 md:ml-5 w-72 " +
                    listExtraStyling
                  }
                  key={index}
                  title={`${item.first_name} ${item.last_name}`}
                  description={item.phone_number}
                  url={
                    item.profile_pic_url
                      ? item.profile_pic_url
                      : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

UsersPage.defaultProps = {};
