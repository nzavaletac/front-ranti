import React from "react";
import { Link } from "react-router-dom";
import { Header, Logo, NavBtn, NavBtnLink } from "./NavBarHomeElements";
import logo from "../../assets/images/icon2.svg";

export const NavBarHome = () => {
  const userName = localStorage.getItem("user");
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
        {userName ? (
          `Hi! ${userName}`
        ) : (
          <NavBtnLink to="/register" active>
            Register
          </NavBtnLink>
        )}
        {userName ? (
          ""
        ) : (
          <NavBtnLink to="/login" active>
            Login
          </NavBtnLink>
        )}
      </NavBtn>
    </Header>
  );
};
