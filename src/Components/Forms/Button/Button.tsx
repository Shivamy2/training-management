import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "success" | "warning" | undefined;
  theme: "solid" | "outline";
  submissionInProgress?: boolean;
  className?: string;
  text: string;
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

  switch (theme) {
    case "outline":
      if (buttonType === "success") {
        extraClassesOnButton +=
          " bg-white border shadow-success border-online-status text-online-status hover:text-white hover:bg-online-status ";
      } else if (buttonType === "primary") {
        extraClassesOnButton +=
          " bg-white border shadow-primary border-primary text-primary hover:bg-primary hover:text-white ";
      } else if (buttonType === "warning") {
        extraClassesOnButton +=
          " bg-white border border-warning shadow-warning text-warning hover:bg-warning hover:text-white ";
      }
      break;

    case "solid":
      extraClassesOnButton += " text-white ";
      if (buttonType === "success") {
        extraClassesOnButton +=
          " shadow-success bg-online-status  hover:shadow-none ";
      } else if (buttonType === "primary") {
        extraClassesOnButton += " hover:shadow-none bg-primary shadow-primary ";
      } else if (buttonType === "warning") {
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
        type="submit"
        className={`px-6 mt-3 md:mt-0 py-2 duration-500 ease-in-out rounded-md focus:outline-none text-sm font-semibold text-center   ${className} ${extraClassesOnButton} `}
      >
        {submissionInProgress ? (
          <ImSpinner9 className="mx-auto animate-spin" />
        ) : (
          text
        )}
      </button>
    </div>
  );
};

Button.defaultProps = {
  submissionInProgress: false,
};

export default React.memo(Button);
