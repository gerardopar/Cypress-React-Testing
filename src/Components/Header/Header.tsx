import React from "react";

import DogLogo from "../../assets/images/dog-api-logo.svg";

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div data-testid="app-header" className="header">
      <div className="header__wrap">
        <img className="header__img" src={DogLogo} alt="dog api logo" />
      </div>
    </div>
  );
};

export default Header;
