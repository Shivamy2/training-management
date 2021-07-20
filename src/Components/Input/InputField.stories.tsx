import InputField from "./InputField";
import "../../index.css";

export default {
  title: "Input Field",
  component: InputField,
};

export const Main = (args: any) => <InputField {...args}></InputField>;
Main.args = {
  className: "",
};
