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

export const HeaderMenu = styled.div`
  margin-right: 30px;
  & a {
    text-decoration: none;
    color: #fff;
  }
`;
