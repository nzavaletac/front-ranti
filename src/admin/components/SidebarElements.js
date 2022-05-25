import { Link } from "react-router-dom";
import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  background-color: #1e1e1e;
  width: 15%;
  text-align: center;
  color: #fff;
  height: calc(100vh -100px);
  border-bottom-right-radius: 50px;
`;

export const AsideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const HeaderMenuProfile = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

export const HeaderMenuProfileImg = styled.img`
  width: 100px;
`;

export const UserName = styled.h4`
  text-align: center;
  color: #fff;
  margin: 50px 0px;
`;

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  width: 100%;
  border-top: 1px solid #fafafa;

  & li {
    display: flex;
    padding: 30px 60px;
    color: #fff;

    & span {
      margin-right: 5px;
    }
    &:hover {
      color: #1e1e1e;
      background-color: #fafafa;
      cursor: pointer;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  &:active {
    background-color: #fafafa;
  }
`;
