import React from "react";
import "./NavBarProfileStyles.css";
import { Link } from "react-router-dom";
import { Header, HeaderMenu, Logo } from "./NavBarProfileElements";
import logo from "../../assets/images/icon2.svg";

export const NavBarProfile = () => {
  return (
    <Header>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <HeaderMenu className="header__menu">
        <Link to="/">Home</Link>
      </HeaderMenu>
    </Header>
  );
};
