import React, { useEffect } from "react";
import { traineeLoadData } from "../../actions/trainee.constants";
import { iconAvatar } from "../../Constants/constants";
import { traineeDetailsSelector } from "../../selectors/trainee.selectors";
import { store, useAppSelector } from "../../Store/store";
import ListGroup from "../ListGroup/ListGroup";

interface Props {}

const YourTrainees: React.FC<Props> = () => {
  const traineeDetails = useAppSelector(traineeDetailsSelector);
  useEffect(() => {
    store.dispatch(traineeLoadData());
  }, []); //eslint-disable-line

  if (!traineeDetails?.length) {
    return (
      <div className="text-center text-warning text-lg font-bold">
        No trainees enrolled
      </div>
    );
  }
  return (
    <div className="grid gap-2 md:grid-cols-2">
      {traineeDetails.map((data, index) => (
        <ListGroup
          key={index}
          className={"hover:bg-gray-100 hover:shadow-stacked mx-auto"}
          name={data?.first_name || "NA"}
          username={data?.username}
          id={data.id}
          url={iconAvatar}
        />
      ))}
    </div>
  );
};

export default React.memo(YourTrainees);
