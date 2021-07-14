import React from "react";
import Direction from "../Components/Direction";

interface Props {}

const SignUp: React.FC<Props> = () => {
  return (
    <div className="flex flex-col flex-1 my-auto text-center">
      <p>This is SignUp Page.</p>
      <Direction text="Already have an account?" path="/login" />
    </div>
  );
};

SignUp.defaultProps = {};

export default React.memo(SignUp);
