import React from "react";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="flex w-1/4 h-screen text-white bg-blue-500">
      <p className="m-auto">This is Sidebar</p>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
