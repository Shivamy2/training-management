import React, { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  children?: React.ReactElement;
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
    <div>
      <div className={`flex ${className}`}>
        {children}
        <label htmlFor={name}>
          <input
            {...rest}
            onFocus={() => {
              setIsInputFieldClicked(true);
            }}
            type={rest.type}
            name={name}
            placeholder={rest.placeholder}
            className="pb-5 pl-4 font-semibold border-white border-none outline-none"
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
        <div className="flex mt-2 text-yellow-500">
          {errorMessage && <IoWarningOutline className={"my-auto"} />}
          <p className="ml-2 text-xs">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

InputField.defaultProps = {};

export default React.memo(InputField);
