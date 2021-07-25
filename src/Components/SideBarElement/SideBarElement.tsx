import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface Props {
  theme?: "solid" | "fill";
  title: string;
  className?: string;
  children: React.ReactNode;
  containsDirection?: boolean;
}

const SideBarElement: React.FC<Props> = ({
  theme,
  className,
  children,
  containsDirection,
  title,
}) => {
  return (
    <Menu>
      {({ open }) => (
        <div className="flex flex-col">
          <Menu.Button>
            <div
              className={
                "flex cursor-pointer focus:outline-none hover:bg-gray-300 justify-between rounded-lg mb-3 py-2.5 px-3.5 h-list-group w-menu " +
                (theme === "solid"
                  ? " bg-transparent hover:shadow-sidebar-elements "
                  : " bg-white hover:shadow-none shadow-sidebar-elements ") +
                className
              }
            >
              <div className="flex space-x-3">
                {children && children}
                <p className="my-0.5 text-sm font-semibold tracking-wider text-black">
                  {title}
                </p>
              </div>
              {containsDirection && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="my-auto text-hamburger-down"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              )}
            </div>
          </Menu.Button>
          <Transition
            show={false}
            as={Fragment}
            enter="transition-trasform duration-500"
            enterFrom="h-0 opacity-0"
            enterTo="h-20 opacity-100"
            leave="transition-trasform duration-500"
            leaveFrom="h-20 opacity-100"
            leaveTo="h-0 opacity-0"
          >
            <Menu.Items className={"bg-red-400 focus:outline-none "} static>
              <ul className="flex flex-col text-sm text-black ml-9">
                <Menu.Item>
                  <li className="py-2.5 relative pl-6 pr-3">
                    <span
                      aria-disabled="true"
                      className="absolute w-1 h-1 rounded-full left-13px top-17.5 bg-primary"
                    ></span>
                    <button className="">
                      <p>Item1</p>
                    </button>
                  </li>
                </Menu.Item>

                <Menu.Item>
                  <li className="py-2.5 relative pl-6 pr-3">
                    <span
                      aria-disabled="true"
                      className="absolute w-1 h-1 rounded-full left-13px top-17.5 bg-primary"
                    ></span>
                    <button className="">
                      <p>Item2</p>
                    </button>
                  </li>
                </Menu.Item>
              </ul>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};

SideBarElement.defaultProps = {
  containsDirection: false,
  theme: "solid",
};

export default React.memo(SideBarElement);
