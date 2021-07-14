import React from "react";
import { useParams } from "react-router-dom";
import Direction from "../Components/Direction";

interface Props {}

const Recordings: React.FC<Props> = () => {
  const { batchNumber, recordingNumber } = useParams<any>();
  return (
    <div className="flex flex-1 h-screen">
      <div className="m-auto text-center">
        <h1>This is Recording Page.</h1>
        <p>Having Batch Number: {batchNumber}</p>
        <p>Recording Number: {recordingNumber}</p>
        <Direction text="Go To Dashboard" path="/dashboard" />
      </div>
    </div>
  );
};

Recordings.defaultProps = {};

export default React.memo(Recordings);
