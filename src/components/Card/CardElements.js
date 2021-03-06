import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  cursor: pointer;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: #aaa 0px 0px 8px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: #aaa 0px 0px 20px;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  height: 360px;
  overflow: hidden;
  transition: all 0.5s ease;
  border: 1px solid #e8e8ed;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 282px;
  height: auto;
  transition: all 0.5s ease;
  background-size: cover;
`;

export const TagPrice = styled.p`
  padding: 6px 10px;
  background-color: #77f16d;
  color: #1e1e1e;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const TagCategory = styled.p`
  padding: 6px 10px;
  background-color: #77f16d;
  color: #1e1e1e;
  position: absolute;
  top: 0;
  right: 0;
`;

export const CardBody = styled.div`
  padding: 15px;
  height: 200px;
`;

export const CardTitle = styled.h4`
  margin-bottom: 5px;
`;

export const CardCategory = styled.h4`
  color: #1e1e1e;
  font-size: 12px;
`;

export const CardDescription = styled.p`
  font-size: 13px;
  line-height: 22px;
  color: #1e1e1e;
  height: 0px;
  transition: all 0.5s ease;
`;

export const CardFooter = styled.div`
  margin-top: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;

export const ContainerDetail = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const Detail = styled(Link)`
  padding: 6px 10px;
  background-color: #1e1e1e;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 15px;
  &:hover {
    color: #77f16d;
  }
`;

export const Seller = styled.h4`
  font-size: 14px;
  text-align: justify;
`;

export const Span = styled.span`
  color: #19726c;
  font-size: 16px;
`;
