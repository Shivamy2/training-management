import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="hidden h-screen text-white bg-blue-500 w-255 md-lg:flex">
      <p className="m-auto">This is Sidebar</p>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);
