import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Main = (args: any) => <Avatar {...args}></Avatar>;
Main.args = {
  className: "",
  circular: true,
};
