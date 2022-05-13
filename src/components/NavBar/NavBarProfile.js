import React from "react";
import "./NavBarProfileStyles.css";
import { Link } from "react-router-dom";
import {
  Header,
  HeaderMenu,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  Logo,
} from "./NavBarProfileElements";
import logo from "../../assets/images/icon2.svg";
import profileImg from "../../assets/images/user.svg";
export const NavBarProfile = () => {
  return (
    <Header>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <HeaderMenu className="header__menu">
        <HeaderMenuProfile>
          <HeaderMenuProfileImg src={profileImg} />
        </HeaderMenuProfile>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </HeaderMenu>
    </Header>
  );
};
