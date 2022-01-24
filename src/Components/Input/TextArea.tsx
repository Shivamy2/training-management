import React, { TextareaHTMLAttributes } from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  labelText: string;
  touched?: boolean;
  errorMessage?: string;
}

const TextArea: React.FC<Props> = ({
  className,
  name,
  labelText,
  touched,
  errorMessage,
  ...rest
}) => {
  return (
    <div className={`mb-3 ${className}`}>
      <label
        htmlFor={name}
        className="form-label font-semibold inline-block mb-2 text-gray-500"
      >
        {labelText}
      </label>
      <textarea
        {...rest}
        className="form-control w-full px-3 py-1.5 text-base font-medium bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
        id={name}
        name={name}
      ></textarea>
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

export default React.memo(TextArea);
