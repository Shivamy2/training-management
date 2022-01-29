import React from "react";
import { store, useAppSelector } from "../../Store/store";
import Alert from "../../Components/Alert/Alert";
import { assignmentError } from "../../selectors/assignment.selectors";
import { useEffect } from "react";
import { traineeLoadData } from "../../actions/trainee.constants";
import {
  traineeDataLoadingSelector,
  traineeDetailsSelector,
} from "../../selectors/trainee.selectors";
import { Link } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import AssignmentUpload from "./AssignmentUpload";
import AssignmentDetails from "./AssignmentDetails";

interface Props {}

const Assignment: React.FC<Props> = () => {
  const error = useAppSelector(assignmentError);
  const trainees = useAppSelector(traineeDetailsSelector);
  const traineeDataLoading = useAppSelector(traineeDataLoadingSelector);

  useEffect(() => {
    store.dispatch(traineeLoadData());
  }, []);

  return (
    <div>
      {traineeDataLoading && (
        <div>
          <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />
        </div>
      )}
      {error && (
        <div className="mb-5 mt-2">
          <Alert
            typeMessage={false}
            className=""
            title={error || "kh"}
            alertType="warning"
          />
        </div>
      )}
      {!trainees?.length && !traineeDataLoading && (
        <div className="p-4">
          <div className="text-center mt-6 text-warning text-lg font-bold">
            You have no trainees till now. You are not allowed to upload
            assignments. Click below to add trainees.
          </div>
          <div className="text-center mt-2">
            <Link className="underline text-primary" to={"/add-trainees"}>
              Add Trainees
            </Link>
          </div>
        </div>
      )}
      {trainees?.length && (
        <div className="p-6">
          <div className="font-extrabold my-6 tracking-wider text-2xl md-lg:text-3xl text-center text-warning">
            Upload Assignment
          </div>
          <AssignmentUpload />
          <div className="font-extrabold my-10 tracking-wider text-2xl md-lg:text-3xl text-center text-warning">
            Saved Assignments
          </div>
          <div className="mx-auto">
            <AssignmentDetails />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Assignment);
