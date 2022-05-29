import React from "react";
import { AiFillSetting, AiFillWechat } from "react-icons/ai";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import {
  Aside,
  AsideContainer,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  NavLink1,
  UnOrderList,
  UserName,
} from "./SidebarElements";
import profileImg from "../../assets/images/user.svg";

export const Sidebar = () => {
  const userName = localStorage.getItem("user");
  return (
    <>
      <Aside>
        <AsideContainer>
          <HeaderMenuProfile>
            <HeaderMenuProfileImg src={profileImg} />
            <UserName>Hello! {userName}</UserName>
          </HeaderMenuProfile>
          <UnOrderList>
            <NavLink1 to="/account/posts" active>
              <li>
                <span>
                  <FaClipboardList size="25px" />
                </span>
                Posts
              </li>
            </NavLink1>
            <NavLink1 to="/account/chats" active>
              <li>
                <span>
                  <AiFillWechat size="25px" />
                </span>
                Chats
              </li>
            </NavLink1>
            <NavLink1 to="/account/settings" active>
              <li>
                <span>
                  <AiFillSetting size="25px" />
                </span>
                Settings
              </li>
            </NavLink1>
            <NavLink1 to="/account/profile" active>
              <li>
                <span>
                  <FaUser size="25px" />
                </span>
                Profile
              </li>
            </NavLink1>
            <NavLink1 to="/">
              <li>
                <span>
                  <RiLogoutBoxFill size="25px" /> Log out
                </span>
              </li>
            </NavLink1>
          </UnOrderList>
        </AsideContainer>
      </Aside>
    </>
  );
};
