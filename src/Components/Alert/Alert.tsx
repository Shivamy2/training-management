import React, { useState } from "react";
import "../../index.css";

interface Props {
  title: string;
  alertType?: "primary" | "success" | "warning";
}

const Alert: React.FC<Props> = ({ title, alertType }) => {
  const [isHidden, setIsHidden] = useState(false);
  let alertTypeText = "Primary!";
  let extraClassOnAlertButton = "";
  let extraClassOnOuterBox = "";

  if (alertType === "primary") {
    alertTypeText = "Primary!";
    extraClassOnAlertButton += " text-primary ";
    extraClassOnOuterBox += " text-primary bg-primary-lite ";
  } else if (alertType === "success") {
    alertTypeText = "Success!";
    extraClassOnAlertButton += " text-online-status ";
    extraClassOnOuterBox += " text-online-status bg-success-light ";
  } else {
    alertTypeText = "Warning!";
    extraClassOnAlertButton += " text-warning ";
    extraClassOnOuterBox += " text-warning bg-warning-light ";
  }

  return (
    <div
      className={
        "w-full h-51 bg-primary-lite rounded-md " +
        (isHidden ? "hidden " : "block ") +
        extraClassOnOuterBox
      }
    >
      <div className="flex justify-between w-full px-4">
        <p className="my-4 mb-4 font-medium text-14">
          <span className="font-semibold">{alertTypeText}&nbsp;</span>
          {title}
        </p>
        <div onClick={() => setIsHidden(true)} className="my-4 mb-4">
          <svg
            className={
              "cursor-pointer hover:opacity-40 font-bold" +
              extraClassOnAlertButton
            }
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  alertType: "primary",
};

export default React.memo(Alert);
