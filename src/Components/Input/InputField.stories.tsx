import InputField from "./InputField";
// import * as icons from "react-icons/io5";

export default {
  title: "Input Field",
  component: InputField,
};

export const Main = (args: any) => <InputField {...args}></InputField>;
Main.args = {
  className: "",
  errorMessage: "This is requried field!",
};
