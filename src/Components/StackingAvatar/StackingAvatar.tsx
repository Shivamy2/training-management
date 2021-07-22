import React, { useEffect } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  avatars: string[];
  size?: "small" | "large";
  className?: string;
}

const StackingAvatar: React.FC<Props> = ({
  avatars,
  className,
  size,
  ...rest
}) => {
  const lengthOfAvatars = avatars?.length;
  let sizeClass = size === "small" ? "h-10 w-10" : "h-16 w-16";

  return (
    <div className={"h-20 " + className}>
      <div className="flex -space-x-2 translating__div ">
        {avatars?.map((items, index) => {
          if (index > 3) return;
          return (
            <img
              key={index}
              {...rest}
              className={
                "rounded-full ring-2 object-cover ring-white inline-block shadow-more-button " +
                sizeClass
              }
              src={items}
              alt="display profile"
            />
          );
        })}
        {lengthOfAvatars > 4 && (
          <div
            className={
              "w-16 h-6 pt-1 mt-2 z-10 text-xs font-semibold text-center bg-white rounded-full cursor-pointer text-primary shadow-more-button " +
              (size === "large" ? " h-7 w-20 mt-5 pt-1.5" : " w-16 h-6 ")
            }
          >
            {" "}
            + {lengthOfAvatars - 4} more
          </div>
        )}
      </div>
    </div>
  );
};

StackingAvatar.defaultProps = {
  size: "small",
};

export default React.memo(StackingAvatar);
