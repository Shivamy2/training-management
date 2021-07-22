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
  <Avatar circular={false} {...args}></Avatar>
);
export const Circular = (args: any) => (
  <Avatar circular={true} {...args}></Avatar>
);
Rounded.args = {
  className: "",
  isOnline: "none",
};

Circular.args = {
  className: "",
  isOnline: "none",
};
