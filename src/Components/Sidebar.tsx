import React from "react";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="hidden w-1/4 h-screen text-white bg-blue-500 md-lg:flex">
      <p className="m-auto">This is Sidebar</p>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
