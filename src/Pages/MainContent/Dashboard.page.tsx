import React from "react";
import { User } from "../../Models/User";
import { ImSpinner9 } from "react-icons/im";

interface Props {
  data?: User;
}

const Dashboard: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-1 w-full h-full bg-white">
      <div className="m-auto">
        <div className="text-center">
          <h1>Welcome</h1>
          {data ? (
            <p>
              {data.first_name} {data.last_name}
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
