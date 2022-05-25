import React from "react";
import { Link } from "react-router-dom";
import { Header, Logo, NavBtn, NavBtnLink } from "./NavBarHomeElements";
import logo from "../../assets/images/icon2.svg";

export const NavBarHome = () => {
  return (
    <Header>
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <NavBtn>
        <NavBtnLink to="/" active>
          Home
        </NavBtnLink>
        <NavBtnLink to="/account" active>
          Account
        </NavBtnLink>
        <NavBtnLink to="/register" active>
          Register
        </NavBtnLink>
        <NavBtnLink to="/login" active>
          Log in
        </NavBtnLink>
      </NavBtn>
    </Header>
  );
};
