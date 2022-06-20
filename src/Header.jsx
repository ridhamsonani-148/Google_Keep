import React from "react";
import logo from './images/logo.png';
const Header  = () =>
{
  return (
    <>
      <div className="header">
        <img src={logo} width='70' height='70' alt='logo' />
        <h1> Notes </h1>
      </div>
    </>
  )
};

export default Header;