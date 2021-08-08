import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Recordings: React.FC<Props> = () => {
  const { batchNumber, recordingNumber } = useParams<any>();
  return (
    <div className="flex w-full h-full">
      <div className="m-auto text-center">
        <h1>This is Recording Page.</h1>
        <p>Having Batch Number: {batchNumber}</p>
        <p>Recording Number: {recordingNumber}</p>
      </div>
    </div>
  );
};

Recordings.defaultProps = {};

export default React.memo(Recordings);
