import InputField from "./InputField";
// import * as icons from "react-icons/io5";

export default {
  title: "Input Field",
  component: InputField,
  // argTypes: {
  //   icon: {
  //     options: Object.keys(icons),
  //     mapping: icons,
  //     control: {
  //       type: "select",
  //     },
  //   },
  // },
};

export const Main = (args: any) => <InputField {...args}></InputField>;
Main.args = {
  className: "",
  errorMessage: "This is requried field!",
};
