import React from "react";
import { AssignmentResponse } from "../../APIs/Assignment/assignment";

interface Props {
  assignmentDetails: AssignmentResponse;
}

const AssignmentCard: React.FC<Props> = ({ assignmentDetails }) => {
  return (
    <div className="border hover:scale-95 transform duration-300 transition-all text-black shadow-xl cursor-pointer hover:shadow-none rounded-xl min-h bg-warning p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-xs flex font-bold items-center">
          Due Date:{" "}
          <span className="text-sm font-normal">
            &nbsp;{assignmentDetails.dueDate}
          </span>
        </p>
        <div className="font-extrabold text-xl mb-2">
          {assignmentDetails.title}
        </div>
        <p className="text-base">{assignmentDetails.description}</p>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="leading-none italic">
            {assignmentDetails.type ? "Contains Document" : "No Document"}
          </p>
          {/* <p className="text-gray-600">Aug 18</p> */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AssignmentCard);
