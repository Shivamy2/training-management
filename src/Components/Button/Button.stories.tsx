import Button from "./Button";
import "../../index.css";

export default {
  title: "Buttons",
  component: Button,
};

export const Main = (args: any) => <Button {...args}></Button>;
Main.args = {
  className: "",
  text: "Log in",
};
