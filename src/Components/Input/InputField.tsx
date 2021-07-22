import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children?: React.ReactNode;
  className?: string;
  touched?: boolean;
  errorMessage?: string;
}

const InputField: React.FC<Props> = ({
  children,
  className,
  name,
  touched,
  errorMessage,
  ...rest
}) => {
  const [isInputFieldClicked, setIsInputFieldClicked] = useState(false);

  return (
    <div className="w-full pt-6 pb-6">
      <div className={`flex relative w-full ${className}`}>
        {children}
        <label htmlFor={name}>
          <input
            {...rest}
            size={100}
            onFocus={() => {
              setIsInputFieldClicked(true);
            }}
            type={rest.type}
            name={name}
            placeholder={rest.placeholder}
            className="w-full pt-1 pb-4 my-auto font-semibold tracking-wider placeholder-gray-300 border-white border-none outline-none pl-9 "
          />
        </label>
      </div>
      <hr
        className={
          "w-full " +
          (isInputFieldClicked ? "border-primary" : "border-gray-200")
        }
      />
      {touched && (
        <div className="relative">
          <div className="absolute flex mt-2 text-yellow-600">
            {errorMessage && <IoWarningOutline className={"my-auto"} />}
            <p className="ml-2 text-xs">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

InputField.defaultProps = {};

export default React.memo(InputField);
