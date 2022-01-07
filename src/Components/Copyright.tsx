import React from "react";

interface Props {
  className?: string;
}

const Copyright: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <p className="mt-16 font-semibold text-gray-700">
        &copy; 2022 All Rights Reserved.{" "}
        <span className="text-primary"> PORTAL </span> is a product of
        Designreset.{" "}
        <span className="text-primary">Cookie Preferences, Privacy</span>, and{" "}
        <span className="text-primary">Terms.</span>
      </p>
    </div>
  );
};

Copyright.defaultProps = {};

export default React.memo(Copyright);
