import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { assignmentFetch } from "../../actions/assignment.action";
import Button from "../../Components/Button/Button";
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
  const [seeMore, setSeeMore] = useState(4);

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
          savedAssignments
            ?.slice(0, seeMore)
            ?.map((assignment) => (
              <AssignmentCard assignmentDetails={assignment} />
            ))
        ) : (
          <div className="text-center col-span-2 text-lg font-bold">
            No Assignments created
          </div>
        )}
      </div>
      {seeMore < savedAssignments.length && (
        <div className="text-center mt-6">
          <Button
            onClick={() => setSeeMore((prev) => prev + 4)}
            text="See More"
            theme="warning"
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(AssignmentDetails);
