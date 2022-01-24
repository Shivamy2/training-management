import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { assignmentFetch } from "../../actions/assignment.action";
import AssignmentCard from "../../Components/Cards/AssignmentCard";
import {
  assignmentLoadingList,
  assignmentMapDataSelector,
} from "../../selectors/assignment.selectors";
import { store, useAppSelector } from "../../Store/store";

interface Props {}

const AssignmentDetails: React.FC<Props> = () => {
  const savedAssignments = useAppSelector(assignmentMapDataSelector);
  const isLoading = useAppSelector(assignmentLoadingList);

  useEffect(() => {
    store.dispatch(assignmentFetch());
  }, []);

  return (
    <div>
      {isLoading && (
        <div>
          <ImSpinner9 className="animate-spin h-6 w-6 mx-auto" />
        </div>
      )}
      <div className="grid grid-col-1 gap-4 md-lg:grid-cols-2">
        {savedAssignments.length ? (
          savedAssignments?.map((assignment) => (
            <AssignmentCard assignmentDetails={assignment} />
          ))
        ) : (
          <div className="text-center col-span-2 text-lg font-bold">
            No Assignments created
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(AssignmentDetails);
