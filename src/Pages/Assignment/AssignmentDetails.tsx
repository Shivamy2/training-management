import React from "react";
import AssignmentCard from "../../Components/Cards/AssignmentCard";
import { assignmentMapDataSelector } from "../../selectors/assignment.selectors";
import { useAppSelector } from "../../Store/store";

interface Props {}

// useEffect(() => {
//   store.dispatch(assignmentFetch());
// }, []);

const AssignmentDetails: React.FC<Props> = () => {
  const savedAssignments = useAppSelector(assignmentMapDataSelector);
  return (
    <div>
      <div className="grid grid-col-1 gap-4 md-lg:grid-cols-2">
        {savedAssignments?.map((assignment) => (
          <AssignmentCard assignmentDetails={assignment} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(AssignmentDetails);
