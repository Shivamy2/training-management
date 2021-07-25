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
  const addDefaultSrc = (event: any) => {
    event.target.src =
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  };

  return (
    <div className={"min-h-16 ring-1 ring-gray-200 " + className}>
      <div className="py-2.5 flex px-3">
        <div className="mr-3 w-list-group">
          <img
            onError={addDefaultSrc}
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
