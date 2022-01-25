import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { traineeLoadData } from "../../actions/trainee.constants";
import { iconAvatar } from "../../Constants/constants";
import {
  traineeDataLoadingSelector,
  traineeDetailsSelector,
} from "../../selectors/trainee.selectors";
import { store, useAppSelector } from "../../Store/store";
import Button from "../Button/Button";
import ListGroup from "../ListGroup/ListGroup";

interface Props {}

const YourTrainees: React.FC<Props> = () => {
  const traineeDetails = useAppSelector(traineeDetailsSelector);
  const traineesLoading = useAppSelector(traineeDataLoadingSelector);

  const [seeMore, setSeeMore] = useState(6);

  useEffect(() => {
    store.dispatch(traineeLoadData());
  }, []); //eslint-disable-line

  if (!traineeDetails?.length && !traineesLoading) {
    return (
      <div className="text-center text-warning text-lg font-bold">
        No trainees enrolled
      </div>
    );
  }

  return (
    <>
      {traineesLoading && (
        <div className="my-6">
          <ImSpinner9 className="w-full h-12 m-auto animate-spin" />
        </div>
      )}
      <div className="grid gap-2 md:grid-cols-2">
        {traineeDetails.slice(0, seeMore).map((data, index) => (
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
      {seeMore < traineeDetails.length && (
        <div className="text-center mt-6">
          <Button
            onClick={() => setSeeMore((prev) => prev + 6)}
            text="See More"
            theme="warning"
          />
        </div>
      )}
    </>
  );
};

export default React.memo(YourTrainees);
