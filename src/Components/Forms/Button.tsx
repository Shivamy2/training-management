import React from "react";
import { ImSpinner9 } from "react-icons/im";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  submissionInProgress?: boolean;
  className?: string;
}

const Button: React.FC<Props> = ({
  submissionInProgress,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={submissionInProgress}
      type="submit"
      className={`px-4 mt-3 md:mt-0 py-2 h-10 w-24 duration-500 ease-in-out rounded-md shadow-xl hover:shadow-none ${className} ${
        submissionInProgress ? "bg-blue-400" : "bg-primary"
      }`}
    >
      <p className="text-sm font-semibold text-center text-white">
        {submissionInProgress ? (
          <ImSpinner9 className="mx-auto animate-spin" />
        ) : (
          "Log In"
        )}
      </p>
    </button>
  );
};

Button.defaultProps = {
  submissionInProgress: false,
};

export default React.memo(Button);
