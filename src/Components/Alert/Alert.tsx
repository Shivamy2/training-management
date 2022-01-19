import React, { useState } from "react";

interface Props {
  title: string;
  alertType?: "primary" | "success" | "warning" | "error";
  className?: string;
  typeMessage?: boolean;
}

const Alert: React.FC<Props> = ({
  title,
  alertType,
  className,
  typeMessage,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  let alertTypeText = "";
  let extraClassOnAlertButton = "";
  let extraClassOnOuterBox = "";

  if (alertType === "primary") {
    typeMessage && (alertTypeText = "Alert!");
    extraClassOnAlertButton += " text-primary ";
    extraClassOnOuterBox += " text-primary bg-primary-lite ";
  } else if (alertType === "success") {
    typeMessage && (alertTypeText = "Success!");
    extraClassOnAlertButton += " text-online-status ";
    extraClassOnOuterBox += " text-online-status bg-success-light ";
  } else if (alertType === "error") {
    typeMessage && (alertTypeText = "Failed!");
    extraClassOnAlertButton += " text-red-500 ";
    extraClassOnOuterBox += " text-red-500 bg-red-50 ";
  } else {
    typeMessage && (alertTypeText = "Warning!");
    extraClassOnAlertButton += " text-warning ";
    extraClassOnOuterBox += " text-warning bg-warning-light ";
  }

  return (
    <div
      className={
        "w-full min-h-51 rounded-md transition ease-in-out duration-300 transform " +
        (isHidden ? "hidden " : "block ") +
        extraClassOnOuterBox +
        " " +
        className
      }
    >
      <div className="flex justify-evenly px-4">
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
