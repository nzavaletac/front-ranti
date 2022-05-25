import styled from "styled-components";

export const Container = styled.footer`
  background: #fafafa;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 25px;
  font-size: 15px;
`;

export const Links = styled.a`
  margin: 0px 25px;
  text-decoration: none;
  color: #1e1e1e;
  padding: 5px;
  &:hover {
    text-decoration: 2px underline #77f16d;
  }
`;
