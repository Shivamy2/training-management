import React, { useEffect } from "react";
import { fetchUser } from "../../APIs/Users/user";

interface Props {}

export const UsersPage: React.FC<Props> = () => {
  useEffect(() => {
    fetchUser().then((response) => console.log(response));
  }, []);

  return <div>This is UserPage</div>;
};

UsersPage.defaultProps = {};
