import React from "react";
import DisplayImage from "../../Images/displayImage.jpeg";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  size: "small" | "large";
  src?: string;
  isOnline: boolean;
  className?: string;
  circular?: boolean;
}

const Avatar: React.FC<Props> = ({
  className,
  isOnline,
  circular,
  size,
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
      <img
        {...rest}
        src={DisplayImage}
        className={className + " " + avatarClass + " " + avatarSize}
        alt="display profile"
      />
      <span
        className={
          "absolute w-3 h-3 border-2 border-white rounded-full " +
          onlineCircleClass +
          (isOnline ? " bg-online-status " : " bg-gray-300 ")
        }
      ></span>
    </div>
  );
};

Avatar.defaultProps = {
  size: "small",
  isOnline: true,
  circular: false,
  className: " h-7 w-7 ",
  src: DisplayImage,
};

export default React.memo(Avatar);
