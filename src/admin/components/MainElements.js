import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
  color: #fff;
`;

export const Aside = styled.aside`
  display: flex;
  background-color: #1e1e1e;
  width: 15%;
  height: auto;
  flex-direction: column;
  text-align: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fafafa;
  width: 85%;
  height: auto;
  color: #1e1e1e;
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
  margin-bottom: 50px;
  flex-direction: column;
`;

export const HeaderMenuProfileImg = styled.img`
  width: 100px;
`;

export const UserName = styled.h4`
  text-align: center;
  color: #fff;
  margin-top: 50px;
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
