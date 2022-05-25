import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  background-color: #fff;
  width: 15%;
  text-align: center;
  color: #1e1e1e;
`;

export const AsideContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const HeaderMenuProfile = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

export const HeaderMenuProfileImg = styled.img`
  width: 100px;
  margin-top: 10px;
`;

export const UserName = styled.h4`
  text-align: center;
  color: #1e1e1e;
  margin: 50px 0px;
  width: 100%;
`;

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  width: 100%;
  border-top: 1px solid gray;
  left: 0;

  & li {
    display: flex;
    padding: 30px 60px;
    color: #1e1e1e;
    left: 0;

    & span {
      margin-right: 5px;
    }
    &:hover {
      color: #fff;
      background-color: #1e1e1e;
      cursor: pointer;
    }
  }
`;

export const NavLink1 = styled(NavLink)`
  text-decoration: none;
  &.active {
    background-color: #1e1e1e;
    & li {
      color: #fff;
    }
  }
`;
