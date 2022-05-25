import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 250px;
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
  height: 150px;
  overflow: hidden;
  transition: all 0.5s ease;
  border: 1px solid #e8e8ed;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
  transition: all 0.5s ease;
  background-size: cover;
`;

export const TagPrice = styled.p`
  padding: 0px 5px;
  background-color: #77f16d;
  color: #1e1e1e;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
`;

export const TagCategory = styled.p`
  padding: 0px 5px;
  background-color: #77f16d;
  color: #1e1e1e;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
`;

export const CardBody = styled.div`
  padding: 15px;
  height: 100px;
  border: 1px solid #e8e8ed;
  overflow: hidden;
`;

export const CardTitle = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 900;
`;

export const CardCategory = styled.p`
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
  justify-content: space-evenly;
  padding: 0px;
`;

export const Button = styled(Link)`
  padding: 6px 10px;
  color: #1e1e1e;
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

export const Seller = styled.p`
  font-size: 11px;
`;

export const Whatsapp = styled.p`
  font-size: 11px;
`;

export const Location = styled.p`
  font-size: 11px;
`;

export const StateProduct = styled.p`
  font-size: 11px;
`;

export const ChangeFor = styled.p`
  font-size: 11px;
`;
