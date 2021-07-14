import React from "react";
import Direction from "../Components/Direction";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 my-auto text-center">
        <p>This is Login Page.</p>
        <Direction text="Want to create an account?" path="/signup" />
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
