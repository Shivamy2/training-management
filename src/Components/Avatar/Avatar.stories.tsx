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

export const Main = (args: any) => <Avatar {...args}></Avatar>;
Main.args = {
  className: "",
  circular: true,
  isOnline: "none",
};
