import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = () => {
  return (
    <div className="flex-1 hidden bg-black h-130 md-lg:flex">
      <div className="w-full h-full m-auto bg-center bg-no-repeat bg-heroSize bg-authHero"></div>
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
