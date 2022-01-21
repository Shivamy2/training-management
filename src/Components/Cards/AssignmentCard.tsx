import React from "react";
import { AssignmentResponse } from "../../APIs/Assignment/assignment";

interface Props {
  assignmentDetails: AssignmentResponse;
}

const AssignmentCard: React.FC<Props> = ({ assignmentDetails }) => {
  const date = new Date(JSON.parse(assignmentDetails.dueDate));
  const due_date = `${date.getDate()}/${date.getDay()}/${date.getFullYear()} 11:59:00 PM`;
  return (
    <div className="border text-black shadow-xl cursor-pointer hover:shadow-none rounded-xl h-56 bg-warning p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-xs flex font-bold items-center">
          Due Date:{" "}
          <span className="text-sm font-normal">&nbsp;{due_date}</span>
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
