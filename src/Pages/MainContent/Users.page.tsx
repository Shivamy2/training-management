import React, { useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import { usersFetchAction } from "../../actions/users.actions";
import {
  userListSelector,
  userLoadingSelector,
} from "../../selectors/user.selectors";
import { store, useAppSelector } from "../../Store/store";

interface Props {}

export const UsersPage: React.FC<Props> = () => {
  const usersData = useAppSelector(userListSelector);
  const isLoading = useAppSelector(userLoadingSelector);
  useEffect(() => {
    store.dispatch(usersFetchAction());
  }, []);

  return !isLoading ? (
    <div>
      {usersData?.map((user) => (
        <div key={user.id}>
          {user.first_name} {user.last_name}
        </div>
      ))}
    </div>
  ) : (
    <div>
      <ImSpinner className="animate-spin h-6 w-6 m-auto" />
    </div>
  );
};

UsersPage.defaultProps = {};
