import React from "react";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  textClassName?: string;
  className?: string;
}

const Direction: React.FC<Props> = ({
  path,
  text,
  textClassName,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <Link to={path}>
        <span className={`${textClassName}`}>{text}</span>
      </Link>
    </div>
  );
};

Direction.defaultProps = {
  textClassName: "text-primary underline",
};

export default React.memo(Direction);
