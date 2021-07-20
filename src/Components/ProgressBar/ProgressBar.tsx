import React from "react";

interface Props {
  progress: number;
  className?: string;
  progressType: "primary" | "success" | "warning";
}

const ProgressBar: React.FC<Props> = ({
  progress,
  className,
  progressType,
}) => {
  let progressClass = "";
  switch (progressType) {
    case "primary":
      progressClass += " bg-primary ";
      break;
    case "success":
      progressClass += " bg-online-status ";
      break;
    case "warning":
      progressClass += " bg-warning ";
      break;

    default:
      break;
  }
  return (
    <div
      className={
        "w-full shadow-progress h-4 rounded-full bg-progress-bar " + className
      }
    >
      <div
        className={"h-full rounded-full" + progressClass}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  progressType: "primary",
  progress: 25,
};

export default React.memo(ProgressBar);
