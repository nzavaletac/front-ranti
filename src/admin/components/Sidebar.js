import React from "react";
import { AiFillSetting, AiFillWechat } from "react-icons/ai";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import {
  Aside,
  AsideContainer,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  NavLink,
  UnOrderList,
  UserName,
} from "./SidebarElements";
import profileImg from "../../assets/images/user.svg";

export const Sidebar = () => {
  return (
    <>
      <Aside>
        <AsideContainer>
          <HeaderMenuProfile>
            <HeaderMenuProfileImg src={profileImg} />
            <UserName>Hello! Noe</UserName>
          </HeaderMenuProfile>
          <UnOrderList>
            <NavLink to="/account/posts" activeStyle>
              <li>
                <span>
                  <FaClipboardList size="25px" />
                </span>
                Posts
              </li>
            </NavLink>
            <NavLink to="/account/chats" activeStyle>
              <li>
                <span>
                  <AiFillWechat size="25px" />
                </span>
                Chats
              </li>
            </NavLink>
            <NavLink to="/account/settings" activeStyle>
              <li>
                <span>
                  <AiFillSetting size="25px" />
                </span>
                Settings
              </li>
            </NavLink>
            <NavLink to="/account/profile" activeStyle>
              <li>
                <span>
                  <FaUser size="25px" />
                </span>
                Profile
              </li>
            </NavLink>
            <NavLink to="/" activeStyle>
              <li>
                <span>
                  <RiLogoutBoxFill size="25px" /> Log out
                </span>
              </li>
            </NavLink>
          </UnOrderList>
        </AsideContainer>
      </Aside>
    </>
  );
};
