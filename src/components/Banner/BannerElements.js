import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: calc(100vh - 1.5%);
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  width: 100%;
  flex: 100%;
  align-items: center;
  display: flex;
  flex-flow: wrap;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  left: 0;
  right: 0;
`;

export const SubTitle = styled.h2`
  display: block;
  font-size: 1.5em;
`;

export const Title = styled.h1`
  display: block;
  font-size: 40px;
  font-weight: 1000px;
`;

export const Span = styled.span`
  color: #77f16d;
`;

export const Paragraph = styled.h4`
  display: block;
  font-size: 14px;
`;

export const RegisterBtn = styled(Link)`
  color: #77f16d;
  font-size: 22.4px;
  &:hover {
    color: #1e1e1e;
  }
`;

export const BannerImg = styled.img`
  width: 600px;
`;
