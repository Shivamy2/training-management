import Button from "./Button";

export default {
  title: "Buttons",
  component: Button,
};

export const Main = (args: any) => <Button {...args}></Button>;
Main.args = {
  className: "",
  text: "Log in",
};
