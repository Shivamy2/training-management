import ListGroup from "./ListGroup";

export default {
  title: "List Group",
  component: ListGroup,
};

export const Light = (args: any) => <ListGroup {...args}></ListGroup>;
export const Dark = (args: any) => <ListGroup {...args}></ListGroup>;
Light.args = {
  className: "hover:bg-gray-100 hover:shadow-stacked",
  infoClassName: "text-hamburger",
  url:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};

Dark.args = {
  className: "bg-list-group shadow-stacked hover:shadow-none",
  infoClassName: "text-white",
  url:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
};
