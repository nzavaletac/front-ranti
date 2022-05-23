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
} from "../components/AsideElements";
import profileImg from "../../assets/images/user.svg";

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
              <li>Posts</li>
              <li>Chats</li>
              <li>Settings</li>
              <li>Profile</li>
            </UnOrderList>
          </AsideContainer>
        </Aside>
        <Body>Dashboard Main</Body>
      </Container>
    </>
  );
};
