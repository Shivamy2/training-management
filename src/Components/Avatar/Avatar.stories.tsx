import Avatar from "./Avatar";

const isOnline = { true: true, false: false, none: "none" };

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    isOnline: {
      options: Object.keys(isOnline),
      mapping: isOnline,
      control: {
        type: "select",
      },
    },
  },
};

export const Rounded = (args: any) => (
  <Avatar
    src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
    {...args}
  ></Avatar>
);
export const Circular = (args: any) => (
  <Avatar
    src="https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
    {...args}
  ></Avatar>
);
Rounded.args = {
  className: "",
  src:
    "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",

  circular: false,
  isOnline: "none",
};

Circular.args = {
  className: "",
  circular: true,
  isOnline: "none",
};
