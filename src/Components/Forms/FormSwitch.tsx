import { Switch } from "@headlessui/react";
import React from "react";

interface Props {
  checked: boolean;
  setCheckedStatus: () => void;
}

const FormSwitch: React.FC<Props> = ({ checked, setCheckedStatus }) => {
  return (
    <Switch
      checked={checked}
      onChange={setCheckedStatus}
      className={`${checked ? "bg-primary" : "bg-primary-light"}
          relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Password toggle</span>
      <span
        aria-hidden="true"
        className={`${
          checked ? "translate-x-4 bg-white" : "translate-x-0 bg-primary"
        }
            pointer-events-none inline-block h-4 w-4 rounded-full  shadow-xl transform ring-0 transition ease-in-out duration-300`}
      />
    </Switch>
  );
};

FormSwitch.defaultProps = {};

export default React.memo(FormSwitch);
