import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "success" | "warning" | undefined;
  buttonType?: "solid" | "outline";
  submissionInProgress?: boolean;
  className?: string;
  text?: string;
}

const Button: React.FC<Props> = ({
  submissionInProgress,
  className,
  text,
  theme,
  buttonType,
  ...rest
}) => {
  let extraClassesOnButton = "";

  switch (buttonType) {
    case "outline":
      if (theme === "success") {
        extraClassesOnButton +=
          " bg-white border hover:shadow-success border-online-status text-online-status hover:text-white hover:bg-online-status ";
      } else if (theme === "primary") {
        extraClassesOnButton +=
          " bg-white border hover:shadow-primary border-primary text-primary hover:bg-primary hover:text-white ";
      } else if (theme === "warning") {
        extraClassesOnButton +=
          " bg-white border border-warning hover:shadow-warning text-warning hover:bg-warning hover:text-white ";
      }
      break;

    case "solid":
      extraClassesOnButton += " text-white ";
      if (theme === "success") {
        extraClassesOnButton +=
          " shadow-success bg-online-status  hover:shadow-none ";
      } else if (theme === "primary") {
        extraClassesOnButton += " hover:shadow-none bg-primary shadow-primary ";
      } else if (theme === "warning") {
        extraClassesOnButton += " hover:shadow-none bg-warning shadow-warning ";
      }
      break;

    default:
      break;
  }

  return (
    <div>
      <button
        {...rest}
        disabled={submissionInProgress}
        className={`px-5 py-2 relative duration-500 ease-in-out rounded-md focus:outline-none text-sm font-semibold text-center  ${className} ${extraClassesOnButton} `}
      >
        <ImSpinner9
          className={
            "absolute inset-x-0 mx-auto w-14 top-2.5 animate-spin " +
            (submissionInProgress ? "block" : "hidden")
          }
        />
        <p className={`${submissionInProgress ? "opacity-0" : "opacity-100"} `}>
          {text}
        </p>
      </button>
    </div>
  );
};

Button.defaultProps = {
  submissionInProgress: false,
  buttonType: "solid",
  theme: "primary",
  text: "button",
};

export default React.memo(Button);
