import React, { useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { assignmentAvailableFetch } from "../../actions/assignment.action";
import Button from "../../Components/Button/Button";
import {
  assignmentLoadingList,
  assignmentMapDataSelector,
} from "../../selectors/assignment.selectors";
import { store, useAppSelector } from "../../Store/store";
import AssignmentSubmitCard from "./AssignmentSubmitCard";

interface Props {}
const AssignmentSubmit: React.FC<Props> = () => {
  useEffect(() => {
    store.dispatch(assignmentAvailableFetch());
  }, []);

  const assignments = useAppSelector(assignmentMapDataSelector);
  const loading = useAppSelector(assignmentLoadingList);
  const history = useHistory();

  return (
    <div className="p-6 w-full">
      <div className="flex justify-around">
        <div className="font-extrabold my-6 tracking-wider text-2xl md-lg:text-3xl  text-primary">
          Assignments
        </div>
        <Button
          className="my-6 justify-end"
          theme="warning"
          text="View Submitted"
          onClick={() => history.push("/assignment/submitted/all")}
        />
      </div>
      {loading && (
        <div className="">
          <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />
        </div>
      )}
      {!assignments.length && (
        <div className="text-center text-warning text-lg font-bold">
          No Assignments Assigned
        </div>
      )}
      <div className="space-y-16">
        {assignments?.map((assignment, index) => (
          <div key={index}>
            <p className="font-extrabold mt-2.5 bg-warning max-w-max mx-auto px-2 rounded-full text-lg text-white mb-5">
              {index + 1}
            </p>
            <AssignmentSubmitCard data={assignment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AssignmentSubmit);
