import React from "react";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="flex flex-1 w-full h-full bg-white">
      <div className="m-auto">
        <div className="text-center">
          <h1>This is Dashboard Page.</h1>
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
