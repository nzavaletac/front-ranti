import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBarProfile } from "../../components/NavBar/NavBarProfile";
import { Chats } from "../components/Chats";
import { Container, Body } from "../components/MainElements";
import { Posts } from "../components/Posts";
import { Profile } from "../components/Profile";
import { Settings } from "../components/Settings";
import { Sidebar } from "../components/Sidebar";

export const Admin = () => {
  return (
    <>
      <Container>
        <NavBarProfile />
        <Sidebar />
        <Body>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Body>
      </Container>
    </>
  );
};
