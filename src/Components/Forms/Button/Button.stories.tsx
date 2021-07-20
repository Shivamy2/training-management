import Button from "./Button";
import "../../../index.css";

export default {
  title: "Buttons",
  component: Button,
};

export const Solid = (args: any) => <Button {...args}></Button>;
export const Outline = (args: any) => <Button {...args}></Button>;
Solid.args = {
  className: "",
};

Outline.args = {
  className: "",
};
