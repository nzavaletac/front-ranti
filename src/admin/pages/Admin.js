import React from "react";
import { NavBarProfile } from "../../components/NavBar/NavBarProfile";
import {
  Aside,
  AsideContainer,
  Body,
  Container,
  UnOrderList,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  UserName,
} from "../components/MainElements";
import profileImg from "../../assets/images/user.svg";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { AiFillSetting, AiFillWechat } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";

export const Admin = () => {
  return (
    <>
      <NavBarProfile />
      <Container>
        <Aside>
          <AsideContainer>
            <HeaderMenuProfile>
              <HeaderMenuProfileImg src={profileImg} />
              <UserName>Hello! Noe</UserName>
            </HeaderMenuProfile>
            <UnOrderList>
              <li>
                <span>
                  <FaClipboardList size="25px" />
                </span>
                Posts
              </li>
              <li>
                <span>
                  <AiFillWechat size="25px" />
                </span>
                Chats
              </li>
              <li>
                {" "}
                <span>
                  <AiFillSetting size="25px" />
                </span>{" "}
                Settings
              </li>
              <li>
                {" "}
                <span>
                  <FaUser size="25px" />
                </span>{" "}
                Profile
              </li>
              <li>
                <span>
                  <RiLogoutBoxFill size="25px" /> Log out
                </span>
              </li>
            </UnOrderList>
          </AsideContainer>
        </Aside>
        <Body>Dashboard Main</Body>
      </Container>
    </>
  );
};
