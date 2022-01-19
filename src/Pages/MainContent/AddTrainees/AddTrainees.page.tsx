import React from "react";
import { useAppSelector } from "../../../Store/store";
import Alert from "../../../Components/Alert/Alert";
import { bulkTraineeErrorMessageSelector } from "../../../selectors/trainee.selectors";
import AddTraineeComponent from "../../../Components/Trainee/AddTrainee.component";
import YourTraineesComponent from "../../../Components/Trainee/YourTrainees.component";

interface Props {}

const AddTrainees: React.FC<Props> = () => {
  const bulkTraineeFailedMessage = useAppSelector(
    bulkTraineeErrorMessageSelector
  );
  return (
    <div className="p-5">
      {bulkTraineeFailedMessage && (
        <div>
          <Alert
            title={bulkTraineeFailedMessage || "Invalid Data"}
            alertType="error"
          />
        </div>
      )}
      <div className="font-extrabold mb-10 tracking-wider text-2xl md-lg:text-3xl text-center text-primary">
        Add Trainees
      </div>
      <AddTraineeComponent />
      <div className="font-extrabold my-10 tracking-wider text-2xl md-lg:text-3xl text-center text-primary">
        Your Trainees
      </div>
      <div className="mx-auto">
        <YourTraineesComponent />
      </div>
    </div>
  );
};

export default React.memo(AddTrainees);
