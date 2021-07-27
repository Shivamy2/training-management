import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  size: "small" | "large";
  src?: string;
  isOnline?: boolean | "none";
  className?: string;
  circular?: boolean;
}

const Avatar: React.FC<Props> = ({
  className,
  isOnline,
  circular,
  size,
  src,
  ...rest
}) => {
  let avatarSize = " h-7 w-7 ";
  let onlineCircleClass = "";
  let avatarClass = "";

  switch (size) {
    case "small":
      onlineCircleClass += " top-4 ";
      if (circular) {
        onlineCircleClass += " right-3 ";
        avatarClass += " rounded-full ";
      } else {
        onlineCircleClass += " right-2";
        avatarClass += " rounded ";
      }
      break;
    case "large":
      avatarSize = " h-10 w-10 ";
      onlineCircleClass += " right-0 h-4 w-4 ";
      if (circular) {
        onlineCircleClass += " top-6 ";
        avatarClass += " rounded-full ";
      } else {
        onlineCircleClass += " top-7 ";
        avatarClass += " rounded ";
      }
      break;

    default:
      break;
  }
  return (
    <div className="relative w-10">
      {src ? (
        <img
          onError={(event: any) =>
            (event.target.src =
              "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80")
          }
          {...rest}
          src={src}
          className={className + " " + avatarClass + " " + avatarSize}
          alt="display profile"
        />
      ) : (
        <ImSpinner9 className="text-white animate-spin" />
      )}
      {isOnline !== "none" && (
        <span
          className={
            "absolute w-3 h-3 border-2 border-white rounded-full " +
            onlineCircleClass +
            (isOnline ? " bg-online-status " : " bg-gray-300 ")
          }
        ></span>
      )}
    </div>
  );
};

Avatar.defaultProps = {
  size: "small",
  isOnline: "none",
  circular: false,
  className: " h-7 w-7 ",
};

export default React.memo(Avatar);
