import React from "react";
import logo from "../png/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header-logo" />
    </div>
  );
};
export default Header;
