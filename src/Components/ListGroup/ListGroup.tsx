import React from "react";
interface Props {
  title: string;
  description?: string;
  url: string;
  className?: string;
  infoClassName?: string;
}

const ListGroup: React.FC<Props> = ({
  title,
  description,
  url,
  className,
  infoClassName,
}) => {
  return (
    <div className={"min-h-16 ring-1 ring-gray-200 " + className}>
      <div className="py-2.5 flex px-3">
        <div className="mr-3 w-list-group">
          <img
            src={url}
            alt="group profile"
            className="object-cover max-w-full rounded-full w-list-group h-list-group"
          />
        </div>
        <div className={infoClassName}>
          <h6 className="font-bold">{title}</h6>
          <p className="text-xs font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

ListGroup.defaultProps = {};

export default React.memo(ListGroup);
