import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  children?: React.ReactElement;
  className?: string;
}

const InputField: React.FC<Props> = ({
  children,
  className,
  name,
  ...rest
}) => {
  return (
    <div className={`flex ${className}`}>
      {children}
      <label htmlFor={name}>
        <input
          {...rest}
          type={rest.type}
          name={name}
          placeholder={rest.placeholder}
          className="pb-5 pl-4 bg-white border-white placeholder-opacity-60 focus:outline-none"
          required
        />
      </label>
    </div>
  );
};

InputField.defaultProps = {};

export default React.memo(InputField);
