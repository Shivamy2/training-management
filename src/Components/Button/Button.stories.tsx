import Button from "./Button";

export default {
  title: "Buttons",
  component: Button,
};

export const Solid = (args: any) => <Button {...args}></Button>;
export const Outline = (args: any) => <Button {...args}></Button>;

Solid.args = {
  className: "",
  text: "Log in",
  buttonType: "solid",
};

Outline.args = {
  className: "",
  text: "Log in",
  buttonType: "outline",
};
