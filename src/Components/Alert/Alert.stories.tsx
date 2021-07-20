import Alert from "./Alert";
import "../../index.css";

export default {
  title: "Alert",
  component: Alert,
};

export const Main = (args: any) => <Alert {...args}></Alert>;
Main.args = {
  className: "",
};
