import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: start;
`;

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  width: 100%;
  margin-left: 50px;
  & li {
    display: flex;
    border-bottom: 1px solid #e8e8ed;
    padding-top: 8px;
    &:hover {
      color: #77f16d;
      cursor: pointer;
    }
  }
`;

export const TagImg = styled.img`
  width: 35px;
  height: 100%;
  margin-right: 5px;
`;
