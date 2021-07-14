import React from "react";
import Direction from "../Components/Direction";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="flex flex-1">
      <div className="m-auto text-center">
        <h1>This is Dashboard Page.</h1>
        <Direction text="Go to recordings page" path="/batch/1/recording/15" />
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
