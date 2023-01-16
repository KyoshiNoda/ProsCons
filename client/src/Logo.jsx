import React from "react";
import logo from "../src/imgs/logo.png";
function Logo() {
  return (
    <div className="h-24 w-24">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
