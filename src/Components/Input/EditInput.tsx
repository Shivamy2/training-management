import React from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelText: string;
  errorMessage?: string;
  touched?: boolean;
}

const EditInput: React.FC<Props> = ({
  className,
  labelText,
  touched,
  errorMessage,
  ...rest
}) => {
  return (
    <div className={className + " flex flex-col"}>
      <label
        htmlFor={rest.name}
        className="text-sm font-medium tracking-wide text-gray-500"
      >
        {labelText}
      </label>
      <input
        {...rest}
        name={rest.name}
        type={rest.type}
        placeholder={rest.placeholder}
        className="p-2 mt-2 transition duration-200 ease-in-out border border-gray-400 rounded-lg focus:border-primary focus:shadow-primary focus:outline-none"
      />
      {touched && (
        <div className="relative">
          <div className="absolute flex text-yellow-600">
            {errorMessage && <IoWarningOutline className={"my-auto"} />}
            <p className="ml-2 text-xs">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

EditInput.defaultProps = {};

export default React.memo(EditInput);
