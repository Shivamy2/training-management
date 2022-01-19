import React from "react";
interface Props {
  name: string;
  id?: number | string;
  url: string;
  className?: string;
  infoClassName?: string;
  username?: string;
  onClick?: () => void;
}

const ListGroup: React.FC<Props> = ({
  onClick,
  name,
  username,
  id,
  url,
  className,
  infoClassName,
}) => {
  const handleBrokenLink = (event: any) => {
    event.target.src =
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  };

  return (
    <div
      onClick={onClick}
      className={
        "min-h-16 ring-1 ring-gray-200 cursor-pointer md-lg:w-96 bg-primary rounded-lg text-white hover:text-black  " +
        className
      }
    >
      <div className="py-2.5 flex px-3">
        <div className="mr-3 w-list-group">
          <img
            onError={handleBrokenLink}
            src={url}
            alt="group profile"
            className="object-cover max-w-full rounded-full w-list-group h-list-group"
          />
        </div>
        <div className={`flex space-x-4 ${infoClassName}`}>
          <div>
            <h6 className="font-medium text-sm">Id</h6>
            <p className="font-bold italic">{id}</p>
          </div>
          <div>
            <h6 className="font-medium text-sm">Name</h6>
            <p className="font-bold italic">{name}</p>
          </div>
          <div>
            <h6 className="font-medium text-sm">Username</h6>
            <p className="font-bold italic">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ListGroup.defaultProps = {};

export default React.memo(ListGroup);
