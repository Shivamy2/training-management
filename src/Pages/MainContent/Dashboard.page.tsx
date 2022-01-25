import React from "react";
import AssignmentSubmittedTrainer from "../Assignment/AssignmentSubmittedTrainer";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="flex flex-1 w-full h-full">
      <AssignmentSubmittedTrainer />
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
