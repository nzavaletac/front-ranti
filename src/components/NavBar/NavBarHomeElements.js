import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background: #1e1e1e;
  color: #fff;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0;
  width: 100%;
  position: sticky;
  z-index: 20;
`;

export const Logo = styled.img`
  margin-left: 30px;
  width: 50px;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #77f16d;
  white-space: nowrap;
  padding: 10px 22px;
  color: #1e1e1e;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
