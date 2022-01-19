import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = () => {
  return (
    <div className="fixed inset-y-0 right-0 flex-1 hidden w-1/2 bg-black md:block">
      <div className="w-full h-full m-auto bg-no-repeat bg-cover bg-left bg-authHero2"></div>
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
