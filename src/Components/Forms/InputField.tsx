import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  children?: React.ReactElement;
  className?: string;
}

const InputField: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={`flex ${className}`}>
      {children}
      <label>
        <input
          {...rest}
          type={rest.type}
          name={rest.name}
          placeholder={rest.placeholder}
          className="pb-4 pl-4 focus:outline-none"
          required
        />
      </label>
    </div>
  );
};

InputField.defaultProps = {};

export default React.memo(InputField);
