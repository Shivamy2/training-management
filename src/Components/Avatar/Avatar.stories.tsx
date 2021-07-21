import Avatar from "./Avatar";
import "../../index.css";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: { onClick: { action: "clicked" } },
};

export const Main = (args: any) => <Avatar {...args}></Avatar>;
Main.args = {
  className: "",
};
