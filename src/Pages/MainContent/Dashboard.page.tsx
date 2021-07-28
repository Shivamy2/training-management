import React, { useContext } from "react";
import { ImSpinner9 } from "react-icons/im";
import UserContext from "../../User.context";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-1 w-full h-full bg-white">
      <div className="m-auto">
        <div className="text-center">
          <h1>Welcome</h1>
          {user ? (
            <p>
              {user.first_name} {user.last_name}
            </p>
          ) : (
            <ImSpinner9 className="mx-auto animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
