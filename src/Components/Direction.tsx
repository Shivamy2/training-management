import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  className?: string;
}

const Direction: React.FC<Props> = ({ path, text, className }) => {
  return (
    <div>
      <Link to={path}>
        <span className={`${className}`}>{text}</span>
      </Link>
    </div>
  );
};

Direction.defaultProps = {
  className: "text-blue-500 underline",
};

export default React.memo(Direction);
