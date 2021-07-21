import React from "react";
import Direction from "../Components/Direction";
import StackingAvatar from "../Components/StackingAvatar/StackingAvatar";
import DisplayImage from "../.../../Images/displayImage.jpeg";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div className="m-auto">
        <div className="text-center">
          <h1>This is Dashboard Page.</h1>
          <Direction
            text="Go to recordings page"
            path="/batch/1/recording/15"
          />
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
